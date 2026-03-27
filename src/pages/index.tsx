import { useState, useEffect } from 'react';
import { Button, Card, Grid, Swiper, Toast } from 'antd-mobile';
import { useNavigate } from 'umi';
import styles from './index.less';

export default function HomePage() {
  const navigate = useNavigate();

  const menuItems = [
    { key: 'demo', text: '示例页面', icon: '📱' },
    { key: 'antd', text: 'Antd组件', icon: '🎯' },
    { key: 'vant', text: 'Vant组件', icon: '🎨' },
  ];

  return (
    <div className={styles.home}>
      {/* 轮播图 */}
      <Swiper autoplay loop className={styles.swiper}>
        <Swiper.Item>
          <div className={styles.banner}>欢迎使用 H5 框架</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.banner}>基于 Umi + React + Antd Mobile</div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.banner}>集成 Vant UI 组件</div>
        </Swiper.Item>
      </Swiper>

      {/* 功能菜单 */}
      <Card title="功能菜单" className={styles.card}>
        <Grid columns={3} gap={16}>
          {menuItems.map((item) => (
            <Grid.Item key={item.key}>
              <div
                className={styles.menuItem}
                onClick={() => navigate(`/${item.key}`)}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuText}>{item.text}</span>
              </div>
            </Grid.Item>
          ))}
        </Grid>
      </Card>

      {/* 测试按钮 */}
      <Card title="测试区域" className={styles.card}>
        <Button
          color="primary"
          block
          onClick={() => Toast.show('欢迎使用 H5 框架！')}
        >
          点击测试
        </Button>
      </Card>
    </div>
  );
}
