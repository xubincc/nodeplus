import React, { Component, } from 'react'
import  './index.less';
import {connect} from "react-redux"
import {stats} from "../../../services/api/api"
import { withRouter } from 'react-router-dom';
import CountUp from 'react-countup';
import { FormattedMessage } from "react-intl";
class Home extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            visible: false,
            statics:{
              "total_assets": 0,
              "total_rewards": 0,
              "total_running_time": 0,
              "total_node_count": 0,
          }
        };
    }
    componentDidMount(){
      this.queryStats()
    }

    queryStats(){
      stats().then(res=>{
        if(res.code===0){
          let data=res.data;
          this.setState({
            statics:data
          })
        }
      })
    }

    render() {
      const {statics}=this.state
        const localeZh = this.props.locale === "zh";

        return (
          <div className="static_container">
            <div className="statistics_wrapper pc_wrapper mobile_wrapper" >
              <div className="static_item">
                <div className="name">
                  <FormattedMessage id="data_1" />

                </div>
                <div className="value">
                  <span className="num">
                    <CountUp
                      prefix="$"
                      start={0}
                      end={statics.total_assets}
                      duration={5}
                      delay={0}
                      separator=","
                    >
                    </CountUp>
                  </span>
                </div>
              </div>
              <div className="static_item">
                <div className="name">
                  <FormattedMessage id="data_2" />
                </div>
                <div className="value">
                  <span className="num">
                    <CountUp
                      prefix="$"
                      start={0}
                      end={statics.total_rewards}
                      duration={4}
                      delay={0}
                      separator=","
                    >
                    </CountUp>
                  </span>
                </div>
              </div>
              <div className="static_item">
                <div className="name">
                  <FormattedMessage id="data_3" />
                </div>
                <div className="value">
                  <span className="num">
                    <CountUp
                      start={0}
                      end={statics.total_running_time}
                      duration={3}
                      delay={"400ms"}
                      separator=","
                    >
                    </CountUp>
                  </span>
                  <span className="unit">
                    <FormattedMessage id="data_hours" />
                  </span>
                </div>
              </div>
              <div className="static_item">
                <div className="name">
                  <FormattedMessage id="data_4" />
                </div>
                <div className="value">
                  <span className="num">
                    <CountUp
                      start={0}
                      end={statics.total_node_count}
                      duration={2}
                      delay={0}
                      separator=","
                    >
                    </CountUp>
                  </span>
                  {
                    localeZh?
                    <span className="unit">台</span>:
                    null
                  }
                </div>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    locale: state.locale,
  }
}
export default withRouter(connect(mapStateToProps)(Home));
