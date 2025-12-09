import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function HealthMonitorPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>Health Monitor</Title>
      <Paragraph>
        健康监控功能提供系统运行状态的实时监测和告警。
      </Paragraph>
    </div>
  );
}
