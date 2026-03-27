import { useState } from 'react';
import { Button, Toast, Dialog, Switch, Stepper } from 'react-vant';
import styles from './index.less';

export default function VantPage() {
  const [stepperValue, setStepperValue] = useState(1);
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div className={styles.vant}>
      <div className={styles.section}>
        <h3>基础组件</h3>
        <div className={styles.row}>
          <span>开关：</span>
          <Switch checked={switchChecked} onChange={setSwitchChecked} />
        </div>
        <div className={styles.row}>
          <span>步进器：</span>
          <Stepper
            value={stepperValue}
            onChange={setStepperValue}
            min={1}
            max={10}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3>按钮组件</h3>
        <div className={styles.buttonGroup}>
          <Button type="primary" onClick={() => Toast('Primary Button')}>
            Primary
          </Button>
          <Button type="info" onClick={() => Toast('Info Button')}>
            Info
          </Button>
          <Button type="warning" onClick={() => Toast('Warning Button')}>
            Warning
          </Button>
          <Button type="danger" onClick={() => Toast('Danger Button')}>
            Danger
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h3>对话框</h3>
        <div className={styles.buttonGroup}>
          <Button
            type="primary"
            plain
            onClick={() =>
              Dialog.alert({
                title: '提示',
                message: '这是一个对话框',
              })
            }
          >
            打开对话框
          </Button>
        </div>
      </div>
    </div>
  );
}
