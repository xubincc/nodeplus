import React, { Component } from "react";
import "./index.less";
import { Button, Modal, Form, Input, message } from "antd";
import { FormattedMessage } from "react-intl";
import { contactUs } from "../../../services/api/api";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { intlText } from "../../../utils/utils";

const { TextArea } = Input;

const layout = {
  wrapperCol: { span: 24 },
};

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      visible: false,
      modalSuccess: false,
      modalFaile: false,
      isMobile: false,
    };
  }

  componentDidMount() {
    if (document.body.clientWidth <= 768) {
      this.setState({
        isMobile: true,
      });
    }
  }
  onFinish = (values) => {
    console.log("Success:", values);
    this.contact(values);
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  contact = (data) => {
    this.setState({
      loading:true
    })
    let postData={
      name:data.name||"",
      message:data.message||"",
      email:data.email||"",
      phone:data.phone||"",
    }
    contactUs(postData).then((res) => {
      console.log("res", res);
      this.handleOk();
      this.setState({
        loading:false
      })
      if (res.code === 0) {
        this.setState({
          modalSuccess: true,
        });
      } else {
        this.setState({
          modalFaile: true,
        });
      }
    }).catch(()=>{
      this.setState({
        modalFaile: true,
        loading:false
      });
    });
  };

  handleCancelSuccess = () => {
    this.setState({
      modalSuccess: false,
      modalFaile:false
    });
  };

  render() {
    const isEn = this.props.locale === "en";
    const {locale}=this.props
    return (
      <div className="">
        <div className="contact_wrapper">
          <div className="contact_container">
            <ReactCSSTransitionGroup
              transitionEnter={true}
              // transitionEnterTimeout={1500}
              transitionName="contact_title"
            >
              <div
                key="contact_title"
                className="animate__animated   animate__fadeInUp "
              >
                <div className="contact_title">
                  <span className="title_line"></span>
                  <FormattedMessage id="ContactUs" />
                </div>
              </div>
            </ReactCSSTransitionGroup>

            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={(data) => {
                this.onFinish(data);
              }}
            >
              <div className="form_content">
                <ReactCSSTransitionGroup
                  className="leftArea"
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="contact_left"
                >
                  <div
                    key="contact_left"
                    className="animate__animated  animate__delay-1s animate__fadeInUp "
                  >
                    <div className="leftArea">
                      <Form.Item
                        label={intlText("YourName",locale)}
                        name="name"
                        rules={[
                          {
                            required: false,
                            message: intlText("name_tip",locale),
                          },
                        ]}
                      >
                        <Input
                          className="contact_input"
                          placeHolder={intlText("YourName",locale)}
                        />
                      </Form.Item>

                      <Form.Item
                        label={intlText("Email",locale)}
                        style={{ border: "none" }}
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: intlText("email_tip",locale)
                          },
                          {
                            pattern:
                              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                            message: intlText("email_correct",locale)
                          },
                        ]}
                      >
                        <Input
                          className="contact_input"
                          placeHolder={intlText("Email",locale)}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                  className="rightArea"
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="contact_right"
                >
                  <div
                    key="contact_right"
                    className="animate__animated  animate__delay-1s animate__fadeInUp "
                  >
                    <div className="rightArea">
                    <Form.Item
                        label={intlText("Phone",locale)}
                        name="phone"
                        rules={[
                          {
                            required: false,
                            message: intlText("phone_tip",locale)
                          },
                        ]}
                      >
                        <Input
                          className="contact_input"
                          placeHolder={intlText("Phone",locale)}
                        />
                      </Form.Item>
                      <Form.Item
                        label={intlText("message",locale)}
                        style={{ width: "100%" }}
                        name="message"
                        rules={[
                          {
                            required: false,
                            message: intlText("leavel_message",locale),
                          },
                        ]}
                      >
                        <TextArea
                          className="contact_textarea"
                          placeHolder={intlText("message",locale)}
                          rows={4}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
              <div className="submit_wrapper">
                <ReactCSSTransitionGroup
                  transitionEnter={true}
                  transitionEnterTimeout={500}
                  transitionName="ContactUsBtn"
                >
                  <div
                    key="ContactUsBtn"
                    className="send_btn animate__animated  animate__delay-2s animate__fadeInUp "
                  >
                    <Button
                      size="large"
                      loading={this.state.loading}
                      disabled={this.state.loading}
                      className="ContactUsBtn"
                      type="primary"
                      htmlType="submit"
                    >
                      {intlText("send_btn",locale)}
                    </Button>
                  </div>
                </ReactCSSTransitionGroup>
              </div>
            </Form>
          </div>
        </div>

        <Modal
          title={null}
          footer={null}
          maskClosable={false}
          centered
          onCancel={() => {
            this.handleCancelSuccess();
          }}
          width={this.state.isMobile ? 300 : 600}
          visible={this.state.modalSuccess}
        >
          <div className="success_content">
            <div className="leftArea">
              <div className="success_img"></div>
            </div>
            <div className="rightArea">
              <div className="modal_title">{intlText("send_success",locale)}</div>
              <div className="modal_info">
                <div>{intlText("send_success_info",locale)}</div>
              </div>
              <Button
                size="large"
                className=" okBtn"
                type="primary"
                onClick={() => {
                  this.handleCancelSuccess();
                }}
              >
              {intlText("ok",locale)}
              </Button>
            </div>
          </div>
        </Modal>

        <Modal
          title={null}
          footer={null}
          centered
          maskClosable={false}
          onCancel={() => {
            this.handleCancelSuccess();
          }}
          width={this.state.isMobile ? 300 : 400}
          visible={this.state.modalFaile}
        >
          <div className="fail_content">
            <div className="fail_img"></div>
            <div className="modal_info">
              {intlText("network_error",locale)}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
export default connect(mapStateToProps)(ContactUs);
