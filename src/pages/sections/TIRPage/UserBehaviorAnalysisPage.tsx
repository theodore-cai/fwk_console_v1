import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function UserBehaviorAnalysisPage() {
  return (
    <div style={{ padding: '8px' }}>
      <Title level={2}>User Behavior Analysis</Title>
      <Paragraph>
        用户行为分析功能提供用户操作数据的统计和分析能力。
      </Paragraph>
    </div>
  );
}
