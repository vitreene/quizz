import React from 'react';

import { Layout } from 'antd';
const { Header, Content } = Layout;

const Gabarit = (props) => {
// console.log('props.children', props.children);

return (
    <Layout> 
    <Header>{props.title}</Header>
    <Content>{props.navigation}</Content>
    <Content>{props.question}</Content>
  </Layout>
)

}

export default Gabarit;