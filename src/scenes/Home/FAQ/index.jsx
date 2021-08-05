import React, { Component } from "react";
import "./index.less";
import { Collapse } from "antd";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { intlText } from "../../../utils/utils";
const { Panel } = Collapse;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqList: [1,2,3,4],
    };
  }
  componentDidMount() {}

  render() {
    const { faqList } = this.state;
    const { locale = "zh" } = this.props;
    const isEn = locale === "en";
    return (
      <div className="faq_wrapper">
        <div className="faq_container">
          <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionName="feature_title"
          >
            <div
              key="feature_title"
              className="animate__animated    animate__fadeInUp "
            >
              <div className="feature_title">
                <span className="title_line"></span>
                <FormattedMessage id="FAQ" />
              </div>
            </div>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionName="question"
          >
            <div
              key={`question`}
              className="animate__animated   animate__delay-1s animate__fadeInUp "
            >
              <Collapse accordion={true} defaultActiveKey={[]}>
                {faqList.map((item, index) => {
                  return (
                    <Panel
                      header={intlText(`faq_q${index + 1}`, locale)}
                      key={item}
                    >
                      {intlText(`faq_a${index + 1}`, locale) &&
                        intlText(`faq_a${index + 1}`, locale).map((text) => {
                          return <p className="faq_a">{text}</p>;
                        })}
                    </Panel>
                  );
                })}
              </Collapse>
            </div>
          </ReactCSSTransitionGroup>
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
export default withRouter(connect(mapStateToProps)(Home));
