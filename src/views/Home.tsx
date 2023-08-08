import React, { useState } from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import Menu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;




const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
              <Menu/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer,marginBottom:'10px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
        <Content style={{ margin: '0 16px' }}>
                <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;