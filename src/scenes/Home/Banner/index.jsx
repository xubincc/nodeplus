import React, { Component } from "react";
import { Button } from "antd";
import "./index.less";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {scrollToElementById} from "../../../utils/utils"

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  componentDidMount() {

  }

  navigationTo(id) {
    scrollToElementById(id)
  }

  render() {
    const localeEn = this.props.locale === "en";

    return (
      <div className="banner_wrapper">
        <div className={localeEn?"banner_text banner_en":"banner_text banner_cn"}>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={500}
            transitionName="animated_bannner_text1"
          >
            <div
              key="bannner_text1"
              className="animate__animated animate__slow animate__fadeInRight "
            >
              <FormattedMessage id="bannner_text" />
            </div>
          </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              transitionEnterTimeout={1000}
              transitionName="animated_bannner_text2"
            >
              <div
                key="bannner_text2"
                className="animate__animated animate__slow animate__delay-1s animate__fadeInLeft "
              >
                <span className="second_text">
                  <FormattedMessage id="bannner_text2" />
                </span>
              </div>
            </ReactCSSTransitionGroup>

        </div>

        <ReactCSSTransitionGroup
          transitionEnterTimeout={1000}
          transitionName="animatedconsult_btn"
        >
          <div
            key="consult_btn"
            className="animate__animated animate__slow animate__delay-2s  animate__fadeInUp "
          >
            <Button
              type="primary"
              className="consult_btn hvr-float-shadow"
              onClick={() => {
                this.navigationTo("contactUs");
              }}
            >
              <FormattedMessage id="banner_btn" />

            </Button>
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
// export default Home(mapStateToProps);
export default withRouter(connect(mapStateToProps)(Home));
