import React, { Component } from "react";
import "./index.less";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import LazyLoad from "react-lazyload";

class FeaturesComp extends Component {
  render() {
    const localeEn = this.props.locale === "en" ? true : false;

    return (
      <div className="features_wrapper">
        <LazyLoad height={75}>
          <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionName="feature_leftArea"
          >
            <div
              key="feature_item3"
              className="animate__animated animate__slow animate__fadeInUp "
            >
              <div className="feature_title">
                <span className="title_line"></span>
                <FormattedMessage id="menu_feature" />
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </LazyLoad>
        <LazyLoad height={75}>
          <div className="pc_wrapper">
            <div className="featrue_content">
              <div className="leftArea">
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="feature_leftArea"
                >
                  <div
                    key="feature_item1"
                    className="animate__animated animate__slow animate__delay-2s animate__fadeInLeft "
                  >
                    <div className="feature_item hvr-float-shadow">
                      <div className="item_icon feature_icon1"></div>
                      <div className="item_name">
                        <FormattedMessage id="feature_1" />
                      </div>
                      <div className="item_des ">
                        <FormattedMessage id="feature_1_text" />
                        <br />
                        <FormattedMessage id="feature_1_text_2" />
                      </div>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="feature_leftArea"
                >
                  <div
                    key="feature_item2"
                    className="animate__animated animate__slow animate__delay-3s animate__fadeInLeft "
                  >
                    <div className="feature_item hvr-float-shadow">
                      <div className="item_icon feature_icon2"></div>
                      <div className="item_name">
                        <FormattedMessage id="feature_2" />
                      </div>
                      <div className="item_des">
                        <FormattedMessage id="feature_2_text" />
                      </div>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
              <div className="centerArea">
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="feature_leftArea"
                >
                  <div
                    key="feature_item3"
                    className="animate__animated animate__slow animate__delay-1s animate__fadeInUp "
                  >
                    <div className="feature_item hvr-float-shadow">
                      <div className="item_icon feature_icon3"></div>
                      <div className="item_name">
                        <FormattedMessage id="feature_3" />
                      </div>
                      <div className="item_des">
                        <FormattedMessage id="feature_3_text" />
                      </div>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
              <div className="rightArea">
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="feature_leftArea"
                >
                  <div
                    key="feature_item3"
                    className="animate__animated animate__slow animate__delay-2s animate__fadeInRight "
                  >
                    <div className="feature_item hvr-float-shadow">
                      <div className="item_icon feature_icon4"></div>
                      <div className="item_name">
                        <FormattedMessage id="feature_4" />
                      </div>
                      <div className="item_des">
                        <FormattedMessage id="feature_4_text" />
                      </div>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="feature_leftArea"
                >
                  <div
                    key="feature_item3"
                    className="animate__animated animate__slow animate__delay-3s animate__fadeInRight "
                  >
                    <div className="feature_item hvr-float-shadow">
                      <div className="item_icon feature_icon5"></div>
                      <div className="item_name">
                        <FormattedMessage id="feature_5" />
                      </div>
                      <div className="item_des">
                 
                          <FormattedMessage id="feature_5_text" />
                          <br />
                          <FormattedMessage id="feature_5_text2" />
                    
                      </div>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
          <div className="mobile_wrapper">
            <ReactCSSTransitionGroup
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionName="feature_bg"
            >
              <div
                key="feature_bg"
                className="animate__animated animate__fadeInUp "
              >
                {localeEn ? (
                  <div className="feature_en_bg"></div>
                ) : (
                  <div className="feature_bg"></div>
                )}
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
export default connect(mapStateToProps)(FeaturesComp);
