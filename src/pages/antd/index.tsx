import { useState } from 'react';
import { Button, List, Switch, Stepper, Slider, Toast, DatePicker, Picker, Dialog } from 'antd-mobile';
import styles from './index.less';

export default function AntdPage() {
  const [checked, setChecked] = useState(false);
  const [stepperValue, setStepperValue] = useState(1);
  const [sliderValue, setSliderValue] = useState(50);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);

  const columns = [
    [
      { label: '周一', value: 'Mon' },
      { label: '周二', value: 'Tue' },
      { label: '周三', value: 'Wed' },
      { label: '周四', value: 'Thu' },
      { label: '周五', value: 'Fri' },
    ],
  ];

  return (
    <div className={styles.antd}>
      <List header="基础组件">
        <List.Item
          prefix="开关"
          extra={
            <Switch
              checked={checked}
              onChange={(val) => setChecked(val)}
            />
          }
        />
        <List.Item prefix="步进器">
          <Stepper
            value={stepperValue}
            onChange={(val) => setStepperValue(val)}
            min={1}
            max={10}
          />
        </List.Item>
        <List.Item prefix="滑块">
          <Slider
            value={sliderValue}
            onChange={(val) => setSliderValue(val)}
            style={{ width: 200 }}
          />
        </List.Item>
      </List>

      <List header="弹出层">
        <List.Item
          prefix="选择器"
          onClick={() => setPickerVisible(true)}
          arrow
        >
          点击打开
        </List.Item>
        <List.Item
          prefix="日期选择"
          onClick={() => setDateVisible(true)}
          arrow
        >
          点击打开
        </List.Item>
      </List>

      <div className={styles.buttonGroup}>
        <Button
          color="primary"
          onClick={() => Toast.show('Antd Mobile 按钮')}
        >
          Primary
        </Button>
        <Button color="success" onClick={() => Toast.show('操作成功')}>
          Success
        </Button>
        <Button color="warning" onClick={() => Toast.show('警告')}>
          Warning
        </Button>
        <Button color="danger" onClick={() => Toast.show('错误')}>
          Danger
        </Button>
        <Button
          color="primary"
          fill="outline"
          onClick={() =>
            Dialog.confirm({
              content: '确定要删除吗？',
              onConfirm: () => Toast.show('已删除'),
            })
          }
        >
          Dialog
        </Button>
      </div>

      <Picker
        columns={columns}
        visible={pickerVisible}
        onClose={() => setPickerVisible(false)}
      />
      <DatePicker
        visible={dateVisible}
        onClose={() => setDateVisible(false)}
      />
    </div>
  );
}
