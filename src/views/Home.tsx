import React, { useState } from 'react';

import { Breadcrumb, Button, Layout, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom'
import Menu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const reset = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
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
            <Button onClick={reset}>注销</Button>
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