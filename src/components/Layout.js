import React from 'react';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Gabarit = (props) => {
// console.log('props.children', props.children);

return (
    <Layout>
    <Header>{props.title}</Header>
    <Header>{props.navigation}</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
)

}

export default Gabarit;