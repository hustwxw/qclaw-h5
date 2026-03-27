import { useState, useCallback } from 'react';
import { Button, List, Switch, Stepper, Slider, Toast } from 'antd-mobile';
import { Stepper as VantStepper, Slider as VantSlider } from 'react-vant';
import styles from './index.less';

export default function DemoPage() {
  const [checked, setChecked] = useState(false);
  const [antdValue, setAntdValue] = useState(1);
  const [vantValue, setVantValue] = useState(1);

  return (
    <div className={styles.demo}>
      <List header="Antd Mobile 组件">
        <List.Item
          prefix="开关"
          extra={
            <Switch
              checked={checked}
              onChange={(val) => {
                setChecked(val);
              }}
            />
          }
        />
        <List.Item prefix="步进器">
          <Stepper
            value={antdValue}
            onChange={(val) => setAntdValue(val)}
            min={1}
            max={10}
          />
        </List.Item>
        <List.Item prefix="滑块">
          <Slider
            defaultValue={50}
            onChange={(val) => console.log(val)}
            style={{ width: 200 }}
          />
        </List.Item>
      </List>

      <List header="Vant 组件">
        <List.Item prefix="步进器">
          <VantStepper
            value={vantValue}
            onChange={setVantValue}
            min={1}
            max={10}
          />
        </List.Item>
        <List.Item prefix="滑块">
          <VantSlider
            defaultValue={50}
            onChange={(val) => console.log(val)}
            style={{ width: 200 }}
          />
        </List.Item>
      </List>

      <div className={styles.buttonGroup}>
        <Button
          color="primary"
          onClick={() => Toast.show('Antd Mobile 按钮')}
        >
          Antd 按钮
        </Button>
        <Button color="success" onClick={() => Toast.show('操作成功')}>
          成功
        </Button>
        <Button color="warning" onClick={() => Toast.show('警告')}>
          警告
        </Button>
        <Button color="danger" onClick={() => Toast.show('错误')}>
          错误
        </Button>
      </div>
    </div>
  );
}
