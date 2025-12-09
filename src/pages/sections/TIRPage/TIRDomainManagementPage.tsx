import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function TIRDomainManagementPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>TIR Domain Management</Title>
      <Paragraph>
        TIR域管理功能提供对TIR相关资源的配置和管理能力。
      </Paragraph>
    </div>
  );
}
