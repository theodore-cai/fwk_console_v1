import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function BPFPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>BPF 页面</Title>
      <Paragraph>
        BPF 管理模块
      </Paragraph>
    </div>
  );
}

export default BPFPage;
