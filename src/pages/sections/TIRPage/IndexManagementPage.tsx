import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function IndexManagementPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>Index Management</Title>
      <Paragraph>
        索引管理功能提供对系统索引的创建、维护和监控能力。
      </Paragraph>
    </div>
  );
}
