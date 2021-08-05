import React, { Component } from "react";
import { Layout, Popover, Input } from "antd";
// import classNames from 'classnames';
import "./footer.less";

import { SettingOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import {withRouter } from 'react-router';
import {scrollToElementById} from "../utils/utils"

const { Footer } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address:"2 Havelock Road, #07-21, Singapore 059763",
      email:"hi@nodeplus.io"
    };
  }
  openUrl = (url) => {
    window.scrollTo(0,0);
    this.props.history.push(url);
  };

  navigationTo(id) {
    if(!this.props.current){
      this.go('/')
      setTimeout(()=>{
        scrollToElementById(id)
      },100)
    }else{
      scrollToElementById(id)
    }
  }
  go = (path) => {
    this.props.history.push(path);
  };
  render() {
    return (
      <Footer className="footer_wrapper">
        <div className="pc_wrapper">
          <div className="leftArea">
            <img
              className="logo"
              onClick={() => {
                this.go("/");
              }}
              src={require("../assets/images/logo_white.png")}
              alt=" logo"
            />

            <div className="email">
              <FormattedMessage id="Email"/>
              ：{this.state.email}</div>
            <div className="phone">
              <FormattedMessage id="footer_address"/>
              
              ：{this.state.address}
            </div>
          </div>
          <div className="content">
            <div className="area_name">
              <FormattedMessage id="footer_navigation"/>

            </div>
            <div className="navigation">
              <span
                onClick={() => {
                  this.navigationTo("feature");
                }}
                className="navigation_item"
              >
                
              <FormattedMessage id="menu_feature"/>

              </span>
              <span
                onClick={() => {
                  this.navigationTo("node");
                }}
                className="navigation_item"
              >
                <FormattedMessage id="menu_networks"/>

              </span>
              <span
                onClick={() => {
                  this.navigationTo("aboutUs");
                }}
                className="navigation_item"
              >
                  <FormattedMessage id="menu_aboutUs"/>

              </span>
              <span
                onClick={() => {
                  this.navigationTo("faq");
                }}
                className="navigation_item"
              >
                  <FormattedMessage id="menu_faq"/>
              </span>
            </div>
          </div>
          <div className="rightArea">
            <div className="area_name">
              <FormattedMessage id="footer_explain"/>

            </div>
            <div className="descrpit_warp">
              <div className="descript_item">
              <span
                onClick={() => {
                  this.openUrl("/Privacy");
                }}
              >
                <FormattedMessage id="footer_privacy"/>
              </span>
              </div>
              <div className="descript_item">

              <span
                onClick={() => {
                  this.openUrl("/TermsOfUse");
                }}
              >
                <FormattedMessage id="footer_termsOfUse"/>
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_wrapper">
          <div className="bottom_area">
            <div className="email">
            <FormattedMessage id="Email"/>
              
              ：{this.state.email}</div>
            <div className="email">
            <FormattedMessage id="footer_address"/>
              
              ：{this.state.address}
            </div>
            <div className="navigation">
              <span
                onClick={() => {
                  this.navigationTo("feature");
                }}
                className="navigation_item"
              >
                <FormattedMessage id="menu_feature"/>
              </span>
              <span
                onClick={() => {
                  this.navigationTo("node");
                }}
                className="navigation_item"
              >
                <FormattedMessage id="menu_networks"/>
              </span>
              <span
                onClick={() => {
                  this.navigationTo("aboutUs");
                }}
                className="navigation_item"
              >
                <FormattedMessage id="menu_aboutUs"/>
              </span>
              <span
                onClick={() => {
                  this.navigationTo("faq");
                }}
                className="navigation_item"
              >
                <FormattedMessage id="menu_faq"/>
              </span>
            </div>
            <div className="agreement">
              <span
                className="agreement_item"
                onClick={() => {
                  this.openUrl("/Privacy");
                }}
              >
                <FormattedMessage id="footer_privacy"/>
                
              </span>
                 
              <span
                className="agreement_item"
                onClick={() => {
                  this.openUrl("/TermsOfUse");
                }}
              >
                <FormattedMessage id="footer_termsOfUse"/>
              </span>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}

export default withRouter(Home);
