import React, { Component } from 'react'
import { Layout } from 'antd';
// import classNames from 'classnames';
import  './index.css';

const { Header, Footer, Content } = Layout;

class Home extends Component {
    render() {
        return (
              <Layout className='wapper'>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        );
    }
}

export default Home;