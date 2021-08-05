import React, { Component } from "react";
import { Layout,BackTop } from "antd";
import { connect } from "react-redux";

import "./index.less";
import AppHeader from "../../components/Header";
import AppFooter from "../../components/Footer";
import Banner from "./Banner";
import Statistics from "./Statistics";
import Feature from "./Feature";
import Networks from "./Networks";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import LazyLoad from "react-lazyload";
import "animate.css";
const { Content } = Layout;

class Home extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload);
    const isEn = this.props.locale === "en";
    isEn
      ? (document.title = "Nodeplus")
      : (document.title = "Nodeplus");
  }
  componentDidUnmount() {
    // 销毁拦截判断是否离开当前页面
    window.removeEventListener('beforeunload', this.beforeunload);
 }
 beforeunload=()=>{
  window.scrollTo(0,0)
 }
  render() {
    const {locale}=this.props
    return (
      <div className="home_wrapper">
        <BackTop/>

        <Layout className="wapper">
          <AppHeader current="home">
          </AppHeader>
          <Content id="home">
            <Banner  id="banner"/>
            <Statistics />
            <div id="feature">
              <LazyLoad height={700}>
                <Feature  />
              </LazyLoad>
            </div>

            <div id="node">
              <LazyLoad height={800}>
                <Networks id="node" />
              </LazyLoad>
            </div>
            <div id="aboutUs">
              <LazyLoad height={800}>
                <AboutUs id="aboutUs" />
              </LazyLoad>
            </div>
            <div id="faq">
              <LazyLoad height={700}>
                <FAQ   locale={locale}/>
              </LazyLoad>
            </div>
            <div id="contactUs">
              <LazyLoad height={600}>
                <ContactUs />
              </LazyLoad>
            </div>
          </Content>

          <AppFooter id="footer" current="home"></AppFooter>
        </Layout>
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
