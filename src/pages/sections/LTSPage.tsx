import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function LTSPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>LTS 页面</Title>
      <Paragraph>
        LTS 管理模块
      </Paragraph>
    </div>
  );
}

export default LTSPage;
