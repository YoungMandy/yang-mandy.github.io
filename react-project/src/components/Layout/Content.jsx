import { Layout } from 'antd';
const { Content } = Layout;

import { Outlet } from "react-router-dom";
import ParamGroup from '../common/ParamGroup.jsx'
import ScrollList from '../common/ScrollList.jsx'
import { Routes, Route } from "react-router-dom";

const contentDom = () =>
{
  
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
     
      <Routes>
        <Route path="/page1" element={<ParamGroup />} />
        <Route path="/page2" element={<ScrollList />} />
      </Routes>
    </Content>
  );
}

export default contentDom;