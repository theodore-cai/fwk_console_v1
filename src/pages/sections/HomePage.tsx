import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>Home 页面</Title>
      <Paragraph>
        欢迎来到主机管理控制台
      </Paragraph>
    </div>
  );
}

export default HomePage;
