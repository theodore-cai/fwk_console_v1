import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function MFPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>MF 页面</Title>
      <Paragraph>
        MF 管理模块
      </Paragraph>
    </div>
  );
}

export default MFPage;
