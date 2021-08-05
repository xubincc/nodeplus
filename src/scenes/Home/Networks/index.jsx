import React, { Component } from "react";
import "./index.less";
import { Tabs, message, Button } from "antd";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {scrollToElementById} from "../../../utils/utils"


class Networks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      networks: [
        {
          id: "1",
          name: "ETH 2.0",
          icon: require("../../../assets/images/networks/eth2.0.png"),
          iconMobile: require("../../../assets/images/networks_mobile/eth2.0.png"),
          url:"https://ethereum.org/en/eth2/"
        },
        {
          id: "2",
          name: "EOS",
          icon: require("../../../assets/images/networks/eos.png"),
          iconMobile: require("../../../assets/images/networks_mobile/eos.png"),

          url:"https://eos.io"
        },
        {
          id: "3",
          name: "Polkadot",
          icon: require("../../../assets/images/networks/polkadot.png"),
          iconMobile: require("../../../assets/images/networks_mobile/polkadot.png"),
          
          url:"https://polkadot.network"
        },
        {
          id: "4",
          name: "Kusama",
          icon: require("../../../assets/images/networks/kusama.png"),
          iconMobile: require("../../../assets/images/networks_mobile/kusama.png"),

          url:"https://kusama.network"
        },
        {
          id: "5",
          name: "Cardano",
          icon: require("../../../assets/images/networks/cardano.png"),
          iconMobile: require("../../../assets/images/networks_mobile/cardano.png"),

          url:"https://cardano.org"
        },
        {
          id: "6",
          name: "PlatON",
          icon: require("../../../assets/images/networks/platon.png"),
          iconMobile: require("../../../assets/images/networks_mobile/platon.png"),

          url:"https://www.platon.network"
        },
        {
          id: "7",
          name: "Terra",
          icon: require("../../../assets/images/networks/terra.png"),
          iconMobile: require("../../../assets/images/networks_mobile/terra.png"),

          url:"https://www.terra.money"
        },
        {
          id: "8",
          name: "Dash",
          icon: require("../../../assets/images/networks/dash.png"),
          iconMobile: require("../../../assets/images/networks_mobile/dash.png"),

          url:"https://www.dash.org"
        },
        {
          id: "9",
          name: "IRISnet",
          icon: require("../../../assets/images/networks/irisnet.png"),
          iconMobile: require("../../../assets/images/networks_mobile/irisnet.png"),

          url:"https://www.irisnet.org"
        },
        {
          id: "10",
          name: "Firo",
          icon: require("../../../assets/images/networks/firo.png"),
          iconMobile: require("../../../assets/images/networks_mobile/firo.png"),

          url:"https://firo.org"
        },
        {
          id: "11",
          name: "Swarm",
          icon: require("../../../assets/images/networks/swarm.png"),
          iconMobile: require("../../../assets/images/networks_mobile/swarm.png"),
          url:"https://www.ethswarm.org"
        },
      ],
    };
  }
  componentDidMount() {}

  openUrl = (url) => {
    if (url) {
      window.open(url);
    } else {
      message.warning("No link set");
    }
  };

  navigationTo(id){
    scrollToElementById(id)

  }
  openUrl(url){
    window.open(url)
  }

  render() {
    const { networks } =
      this.state;
    return (
      <div className="networks_wrapper">
        <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionName="networks_title"
        >
          <div
            key="networks_title"
            className="animate__animated   animate__fadeInUp "
          >
            <div className="networks_title">
              <span className="title_line"></span>
              <FormattedMessage id="menu_networks" />
            </div>
          </div>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionName="networks_title"
        >
          <div
            key="networks_title"
            className="animate__animated  animate__delay-1s animate__fadeInUp "
          >
            <div className="pc_wrapper">
              <div className="networks_clo">
                {networks.map((item) => {
                  return (
                    <div className="networks_item hvr-float-shadow" onClick={()=>{this.openUrl(item.url)}}>
                      <div className="networks_icon">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="networks_name">{item.name}</div>
                    </div>
                  );
                })}
              </div>

              <div className="learnMore">
                <Button className="lm_btn hvr-grow-shadow" type="primary" onClick={()=>{this.navigationTo("contact_us")}}>
                  <FormattedMessage id="learn_more" />                  
                </Button>
              </div>
            </div>
            <ReactCSSTransitionGroup
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionName="networks_title"
            >
              <div
                key="networks_title"
                className="mobile_wrapper animate__animated  animate__delay-1s animate__fadeInUp "
              >
                <div className="networks_clo_mobile">
                  {networks.map((item) => {
                    return (
                      <div className="networks_item" onClick={()=>{this.openUrl(item.url)}}>
                        <div className="networks_icon">
                          <img src={item.iconMobile} alt="" />
                        </div>
                        <div className="networks_name">{item.name}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="learnMore">
                  <Button className="lm_btn hvr-grow-shadow" type="primary" onClick={()=>{this.navigationTo("contact_us")}}>
                    <FormattedMessage id="learnMore" />                  
                  </Button>
                </div>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
export default connect(mapStateToProps)(Networks);
