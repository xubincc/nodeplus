import React, { Component } from "react";
import { Layout, Menu, Button, Drawer, Dropdown  } from "antd";
// import classNames from 'classnames';
import "./header.less";
import { store } from "../Store";
import * as Action from "../actions";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router-dom";
import {scrollToElementById,isElmInView} from "../utils/utils"
import throttle from 'lodash/throttle'
const { Header } = Layout;

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home",
      selectedKeys:undefined,
      menuList:[
        'home',
        'feature',
        'node',
        'aboutUs',
        'faq'
      ]
    };
  }
  static defaultProps = {
    transparency: false,
  };


  go = (path) => {
    this.props.history.push(path);
  };
  handleClick = (e) => {
    console.log("e", e);
    const { key } = e;
    this.setState({
      selectedKeys: [key],
    });
    if(!this.props.current){
      this.go('/')
      setTimeout(()=>{
        scrollToElementById(key)
      },100)
    }else{
      scrollToElementById(key)
    }

  };



  componentDidMount() {

    var that = this
    window.addEventListener("scroll",
      throttle(()=>{
        this.calCurrentSelect()
      },500)
    )

  }

  calCurrentSelect(){
    const menuRever=this.state.menuList.reverse()
    for (let i=0;i<menuRever.length; i++){
      const isshow =isElmInView(menuRever[i])
      if(isshow){
        this.setState({
          selectedKeys:[menuRever[i]]
        })
        break;
      }
    }
  }

  render() {
    const { setCurrentLocal, current } = this.props;
    const {selectedKeys}=this.state
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={()=>{setCurrentLocal("en")}}>
          English
        </Menu.Item>
        <Menu.Item key="1" onClick={()=>{setCurrentLocal('zh')}}>
          中文
        </Menu.Item>
      </Menu>
    );
    return (
      <Header
        className="header_container"
      >
        <div className="header_wrapper">
          {/* <span className="logo_text">Nodeplus</span> */}
          <img  className="logo" onClick={()=>{this.go('/')}} src={require('../assets/images/logo.png')} alt=" logo"/>
          <div className="header_container_wrapper">
            <div className="header_content">
              <Menu
                onClick={this.handleClick}
                theme="light"
                defaultSelectedKeys={[current]}
                selectedKeys={selectedKeys||[current]}
                mode="horizontal"
              >
                <Menu.Item
                  key="home"
                >
                  <FormattedMessage id="menu_home" defaultMessage={"Home"} />
                </Menu.Item>
                  
                  <Menu.Item
                    key="feature"
                  >
                      <FormattedMessage
                        id="menu_feature"
                        defaultMessage={"Feature"}
                        />
                  </Menu.Item>
                <Menu.Item
                  key="node"
                >
                    <FormattedMessage id="menu_networks" defaultMessage={"Node"} />
                </Menu.Item>
                <Menu.Item
                  key="aboutUs"
                >
                    <FormattedMessage
                      id="menu_aboutUs"
                      defaultMessage={"AboutUs"}
                    />
                </Menu.Item>
                <Menu.Item
                  key="faq"
                >
                <FormattedMessage id="menu_faq" defaultMessage={"FAQ"} />
                </Menu.Item>
              </Menu>
              <Dropdown overlay={menu} trigger={['click']}>
                  <div className=" locale_icon iconfont icon-Global"></div>
              </Dropdown>
            
            </div>
            <div className="vertical_menu_wrapper">
              <Dropdown overlay={menu} trigger={['click']}>
                <div className="locale_icon iconfont icon-Global"></div>
              </Dropdown>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
export default connect(mapStateToProps, Action)(withRouter(AppHeader));
