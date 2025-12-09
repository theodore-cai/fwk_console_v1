import { Space, Button, message } from 'antd';
import { 
  ReloadOutlined, 
  BellOutlined, 
  QuestionCircleOutlined, 
  UserOutlined 
} from '@ant-design/icons';

function TopNavBar() {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleNotification = () => {
    message.info('通知功能占位');
  };

  const handleFAQ = () => {
    message.info('FAQ功能占位');
  };

  const handleAccount = () => {
    message.info('账户功能占位');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: '0 24px',
      }}
    >
      <div 
        style={{ 
          fontSize: '30px', 
          fontWeight: 'bold', 
          color: '#6C5CE7' 
        }}
      >
        fwk_console
      </div>
      <Space size={18}>
        <Button 
          type="text" 
          icon={<ReloadOutlined style={{ fontSize: '24px' }} />} 
          onClick={handleRefresh}
          style={{ fontSize: '24px', width: '48px', height: '48px' }}
        />
        <Button 
          type="text" 
          icon={<BellOutlined style={{ fontSize: '24px' }} />} 
          onClick={handleNotification}
          style={{ fontSize: '24px', width: '48px', height: '48px' }}
        />
        <Button 
          type="text" 
          icon={<QuestionCircleOutlined style={{ fontSize: '24px' }} />} 
          onClick={handleFAQ}
          style={{ fontSize: '24px', width: '48px', height: '48px' }}
        />
        <Button 
          type="text" 
          icon={<UserOutlined style={{ fontSize: '24px' }} />} 
          onClick={handleAccount}
          style={{ fontSize: '24px', width: '48px', height: '48px' }}
        />
      </Space>
    </div>
  );
}

export default TopNavBar;
