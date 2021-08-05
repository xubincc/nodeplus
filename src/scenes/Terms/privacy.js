import React, { Component } from "react";
import { Layout,BackTop } from "antd";
import AppHeader from "../../components/Header";
import AppFooter from "../../components/Footer";
import "./index.less";
const { Content } = Layout;

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    setTimeout(() => window.scrollTo(0,0), 150)
  }

  render() {
    return (
      <div className="home_wrapper">
        <BackTop/>
        <Layout className="wapper">
          <AppHeader transparency={true} current="">
            header
          </AppHeader>
          <Content>
            <div className="policy_warp">
              <div className="title">Cookies and personal data policy</div>
              <div className="text">
                We use cookies on the Nodeplus website to understand more about
                our users and to improve your experience across the website.
                Your personal information is used to offer relevant support,
                inform you about new or updated services, send promotional
                offers, surveys, relevant marketing offers and info, to prevent
                the abuse or misuse of our service.
              </div>
              <div className="title_h3">Cookies Introduction</div>
              <div className="text">
                Cookies are small text files that can be used by websites to
                make a user's experience more efficient. The law states that we
                can store cookies on your device if they are strictly necessary
                for the operation of this site. For all other types of cookies
                we need your permission. This site uses different types of
                cookies. Some cookies are placed by third party services that
                appear on our pages.
              </div>
              <div className="title_h3">Necessary</div>
              <div className="text">
                Necessary cookies help make a website usable by enabling basic
                functions like page navigation and access to secure areas of the
                website. The website cannot function properly without these
                cookies.
              </div>
              <div className="title_h3">Preference</div>
              <div className="text">
                Preference cookies enable a website to remember information that
                changes the way the website behaves or looks, like your
                preferred language or the region that you are in.
              </div>
              <div className="title_h3">Statistics</div>
              <div className="text">
                Statistic cookies help website owners to understand how visitors
                interact with websites by collecting and reporting information
                anonymously.
              </div>
              <div className="title_h3">Marketing</div>
              <div className="text">
                Marketing cookies are used to track visitors across websites.
                The intention is to display ads that are relevant and engaging
                for the individual user and thereby more valuable for publishers
                and third party advertisers.
              </div>
              <div className="title_h3">Unclassified cookies</div>
              <div className="text">
                Unclassified cookies are cookies that we are in the process of
                classifying, together with the providers of individual cookies.
              </div>
              <div className="title_h3">Social Media Third Party Cookies</div>
              <div className="text">
                To enrich our website content, sometimes we may embed video
                content from other social media websites such as YouTube or
                Facebook. As a result, when you visit a page with content
                embedded, you may be presented with cookies from these
                websites.Nodeplus has no control or liability over these cookies
                set, so you should check the relevant third party's cookie
                policy for more information. We also offer a “share page” widget
                on some of our web pages, where content can be shared easily on
                the following sites Facebook, Twitter, LinkedIn and Google+.
                These sites may set a cookie when you are logged into their
                service. Nodeplus has no control or liability over these cookie
                sets, so you should check the relevant third party's cookie
                policy for more information.
              </div>
              <div className="title_h3">How to Control and Delete Cookies</div>
              <div className="text">
                Nodeplus will not use cookies to collect personally identifiable
                information about you. However, should you choose to disable,
                reject or block our cookies, some parts of our websites will not
                function fully, or in some cases, our website will not be
                accessible at all. For more information on how to control your
                cookie settings and browser settings, or how to delete cookies
                on your hard drive, please visit www.allaboutcookies.org.
              </div>
            </div>
          </Content>
          <AppFooter id="footer"></AppFooter>
        </Layout>
      </div>
    );
  }
}

export default Privacy;
