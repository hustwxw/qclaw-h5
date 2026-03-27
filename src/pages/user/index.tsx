import { List, Avatar, Button } from 'antd-mobile';
import {
  UserOutline,
  SetOutline,
  MessageOutline,
  GlobalOutline,
} from 'antd-mobile-icons';
import styles from './index.less';

export default function UserPage() {
  return (
    <div className={styles.user}>
      {/* 用户信息 */}
      <div className={styles.header}>
        <Avatar src="" style={{ width: 64, height: 64 }}>
          U
        </Avatar>
        <div className={styles.userInfo}>
          <div className={styles.name}>用户名</div>
          <div className={styles.desc}>手机号：138****8888</div>
        </div>
      </div>

      {/* 菜单列表 */}
      <List className={styles.menuList}>
        <List.Item prefix={<UserOutline />} onClick={() => {}}>
          个人信息
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
        <List.Item prefix={<MessageOutline />} onClick={() => {}}>
          意见反馈
        </List.Item>
        <List.Item prefix={<GlobalOutline />} onClick={() => {}}>
          关于我们
        </List.Item>
      </List>

      {/* 退出按钮 */}
      <div className={styles.logout}>
        <Button block color="danger" fill="outline">
          退出登录
        </Button>
      </div>
    </div>
  );
}
