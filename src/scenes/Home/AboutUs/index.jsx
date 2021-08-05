import React, { Component } from "react";
import "./index.less";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    return (
      <div className="aboutUs_wrapper">
        <div className="aboutUs_container">
          <div className="form_content">
            <div className="leftArea">
              <ReactCSSTransitionGroup
                transitionEnterTimeout={500}
                transitionName="animated"
              >
                <div
                  key="bannner_text1"
                  className="animate__animated animate__slow animate__fadeInUp animate__fadeIn aboutUsTitle"
                >
                  <span className="title_line"></span>
                  <FormattedMessage id="menu_aboutUs" />
                </div>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup
                transitionEnter={true}
                transitionEnterTimeout={500}
                transitionAppearTimeout={5500}
                transitionName="animated"
              >
                <div
                  key="descript"
                  className="animate__animated  animate__delay-1s animate__fadeIn animate__fadeInUp  descript"
                >
                      <FormattedMessage id="aboutUs_info" />

                </div>
              </ReactCSSTransitionGroup>
              <ReactCSSTransitionGroup
                transitionEnter={true}
                transitionEnterTimeout={1000}
                transitionName="animated"
              >
                <div
                  key="descript2"
                  className="animate__animated animate__slow animate__delay-2s animate__fadeIn animate__fadeInUp  descript"
                >
                    <FormattedMessage id="aboutUs_info2" />

                </div>
              </ReactCSSTransitionGroup>
            </div>
            <div className="rightArea">
              <ReactCSSTransitionGroup
                transitionEnterTimeout={1500}
                transitionEnter={true}
                transitionEnterTimeout={1500}
                transitionName="animated"
              >
                <div
                  key="aboutUs_bg"
                  className="animate__animated animate__slow animate__delay-2s animate__fadeInRight aboutUs_bg"
                ></div>
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
export default connect(mapStateToProps)(Home);
