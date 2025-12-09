import { Layout } from 'antd';
import { ReactNode } from 'react';
import TopNavBar from './TopNavBar';
import SideMenu from './SideMenu';

const { Header, Sider, Content } = Layout;

interface ConsoleLayoutProps {
  children: ReactNode;
}

function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header 
        style={{ 
          height: '90px', 
          padding: 0, 
          background: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #E8E8E8'
        }}
      >
        <TopNavBar />
      </Header>
      <Layout>
        <Sider 
          width={275} 
          style={{ 
            background: '#fff',
            boxShadow: 'none',
            borderRight: '1px solid #E8E8E8'
          }}
        >
          <SideMenu />
        </Sider>
        <Content style={{ padding: '28px', background: '#F5F5F5' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default ConsoleLayout;
