import React, { useState } from 'react';
import { useToast, withToastProvider } from './component-lib';
import { Checkbox, Select, Slider } from 'antd';
import PositionSelector from './components/PositionSelector/PositionSelector';
import { ToastOptions } from './types';
import 'antd/dist/antd.css';
import './App.css';

const { Option } = Select;

const App: React.FC = () => {
  const [toastProps, setToastProps] = useState<ToastOptions>({
    position: 'topRight',
    variant: 'default',
    duration: 5000,
    persist: false,
    withCloseIcon: false
  });
  const toast = useToast();

  const handleTogglePersistance = (e: any) => {
    setToastProps({ ...toastProps, persist: e.target.checked })
  }

  const handleToggleShowIcon = (e: any) => {
    setToastProps({ ...toastProps, withCloseIcon: e.target.checked })
  }

  const handleSelectVariant = (val: ToastOptions['variant']) => {
    setToastProps({ ...toastProps, variant: val })
  }

  const handleSelectPosition = (val: ToastOptions['position']) => {
    setToastProps({ ...toastProps, position: val })
  }

  const handleChangeDuration = (val: any) => {
    setToastProps({ ...toastProps, duration: val * 1000 })
  }

  const handleCreateToast = () => {
    toast.add("This is one fantastic toast!", {
      ...toastProps
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is <span className="logo-whole"> fan<span className="logo-toast">toast</span>ic!</span></h1>
        <p>• A React library for all your toasting needs •</p>
      </header>

      <h2>Let's create the most fantastic toast!</h2>

      {/* Choose a variant */}
      <div className="configuration-container">
        <div className="configuration-label-wrapper">
          <p>Firstly, choose a variant:</p>
        </div>

        <div className="configuration-input-wrapper">
          <Select defaultValue="default" style={{ width: 120 }} onChange={handleSelectVariant}>
            <Option value="primary">Primary</Option>
            <Option value="success">Success</Option>
            <Option value="danger">Danger</Option>
          </Select>
        </div>
      </div>

      {/* Choose a position */}
      <div className="configuration-container">
        <div className="configuration-label-wrapper">
          <p>Where should we render it:</p>
        </div>

        <div className="configuration-input-wrapper">
          <PositionSelector selectedPosition={toastProps.position} onSelectPosition={handleSelectPosition} />
        </div>
      </div>

      <div className="configuration-container">
        <div className="configuration-label-wrapper">
          <p>For how many seconds should it stay visible?</p>
        </div>

        <div className="configuration-input-wrapper">
          <Slider
            min={1}
            max={20}
            value={toastProps.duration ? toastProps.duration / 1000 : 5000}
            onChange={handleChangeDuration}
          />
        </div>
      </div>

      <div className="configuration-container">
        <div className="configuration-label-wrapper">
          <p>What about having a close icon?</p>
        </div>

        <div className="configuration-input-wrapper">
          <Checkbox
            onChange={handleToggleShowIcon}
            checked={toastProps.withCloseIcon}
          >
            Yes, with a close icon please.
          </Checkbox>
        </div>
      </div>

      <div className="configuration-container">
        <div className="configuration-label-wrapper">
          <p>Lastly, should it persist:</p>
        </div>

        <div className="configuration-input-wrapper">
          <Checkbox
            onChange={handleTogglePersistance}
            checked={toastProps.persist}
          >
            Yes, persist it is.
          </Checkbox>
        </div>
      </div>

      <button onClick={handleCreateToast}>Create toast</button>
    </div>
  );
}

const AppWithToastProvider = withToastProvider(App);

export default AppWithToastProvider;
