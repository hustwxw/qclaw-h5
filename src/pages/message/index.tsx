import { List, Avatar, Badge } from 'antd-mobile';
import styles from './index.less';

export default function MessagePage() {
  const messages = [
    { id: 1, title: '系统通知', content: '欢迎使用 H5 框架', time: '刚刚', unread: 2 },
    { id: 2, title: '更新提醒', content: '框架已更新到最新版本', time: '1小时前', unread: 0 },
    { id: 3, title: '活动通知', content: '双11活动即将开始', time: '昨天', unread: 5 },
  ];

  return (
    <div className={styles.message}>
      <List header="消息列表">
        {messages.map((msg) => (
          <List.Item
            key={msg.id}
            prefix={
              <Badge content={msg.unread} wrapperStyle={{ marginInlineEnd: 12 }}>
                <Avatar src="" style={{ borderRadius: '50%' }}>
                  {msg.title[0]}
                </Avatar>
              </Badge>
            }
            description={msg.content}
          >
            {msg.title}
            <span className={styles.time}>{msg.time}</span>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
