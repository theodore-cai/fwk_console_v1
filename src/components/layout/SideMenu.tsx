import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  ClockCircleOutlined,
  LockOutlined,
  MailOutlined,
  ControlOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if we're on a TIR sub-page
  const isTIRPage = currentPath.startsWith('/tir');
  const showOtherSections = !isTIRPage;

  // Determine which keys should be selected
  const selectedKeys = [currentPath];

  // Build menu items dynamically based on current page
  const getMenuItems = (): MenuItem[] => {
    const items: MenuItem[] = [
      { key: '/', label: 'Home', icon: <HomeOutlined /> },
    ];

    // TIR menu item (not a submenu)
    items.push({
      key: '/tir',
      label: 'TIR',
      icon: <AppstoreOutlined />,
    });

    // If on TIR page, show sub-pages as regular menu items
    if (isTIRPage) {
      items.push(
        { key: '/tir/index-management', label: 'Index Management', className: 'tir-submenu-item' },
        { key: '/tir/health-monitor', label: 'Health Monitor', className: 'tir-submenu-item' },
        { key: '/tir/remote-service-trigger', label: 'Remote Service Trigger', className: 'tir-submenu-item' },
        { key: '/tir/user-behavior-analysis', label: 'User Behavior Analysis', className: 'tir-submenu-item' },
        { key: '/tir/tir-domain-management', label: 'TIR Domain Management', className: 'tir-submenu-item' }
      );
    }

    // Only show other sections when not on TIR sub-page
    if (showOtherSections) {
      items.push(
        { key: '/lts', label: 'LTS', icon: <ClockCircleOutlined /> },
        { key: '/auth', label: 'Auth', icon: <LockOutlined /> },
        { key: '/mf', label: 'MF', icon: <MailOutlined /> },
        { key: '/bpf', label: 'BPF', icon: <ControlOutlined /> }
      );
    }

    return items;
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      items={getMenuItems()}
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
