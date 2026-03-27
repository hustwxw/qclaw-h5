import { useState, useEffect } from 'react';
import { Button, Toast, NavBar, TabBar } from 'antd-mobile';
import { useNavigate, useLocation, Outlet } from 'umi';
import {
  AppOutline,
  MessageOutline,
  UserOutline,
} from 'antd-mobile-icons';
import styles from './index.less';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/user',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.tabBar}>
        <TabBar activeKey={pathname} onChange={(key) => navigate(key)}>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
