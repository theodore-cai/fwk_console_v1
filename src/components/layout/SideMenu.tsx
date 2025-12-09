import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  SearchOutlined,
  ClockCircleOutlined,
  LockOutlined,
  MailOutlined,
  ControlOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getMenuItems(): MenuItem[] {
  return [
    { key: '/', label: 'Home', icon: <HomeOutlined /> },
    { key: '/tir', label: 'TIR', icon: <SearchOutlined /> },
    { key: '/lts', label: 'LTS', icon: <ClockCircleOutlined /> },
    { key: '/auth', label: 'Auth', icon: <LockOutlined /> },
    { key: '/mf', label: 'MF', icon: <MailOutlined /> },
    { key: '/bpf', label: 'BPF', icon: <ControlOutlined /> },
  ];
}

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const items = getMenuItems();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      items={items}
      onClick={handleMenuClick}
      style={{ 
        height: '100%', 
        borderRight: 0,
        fontSize: '17.5px'
      }}
    />
  );
}

export default SideMenu;
