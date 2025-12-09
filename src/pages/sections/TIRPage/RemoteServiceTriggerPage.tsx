import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function RemoteServiceTriggerPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>Remote Service Trigger</Title>
      <Paragraph>
        远程服务触发器提供对外部服务的调用和管理能力。
      </Paragraph>
    </div>
  );
}
