import React from 'react';
import { useToast, withToastProvider } from './component-lib';
import './App.css';

const App: React.FC = () => {
  const toast = useToast();

  const handleCreateToast1 = () => {
    toast.add('This is the simplest of the toasts');
  };

  const handleCreateToast2 = () => {
    toast.add("A primary toast is here", { variant: "primary", position: 'topLeft' });
  };

  const handleCreateToast3 = () => {
    toast.add("A danger toast is here", {
      variant: "danger",
      position: "top"
    });
  };

  const handleCreateToast4 = () => {
    toast.add("This toast will close swiftly!", {
      variant: "primary",
      position: 'bottomRight',
      duration: 1000
    });
  };

  const handleCreateToast5 = () => {
    toast.add("This toast will persist!", {
      variant: "danger",
      position: 'bottom',
      persist: true
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Fantoastic</h1>
        <button onClick={handleCreateToast1}>Default toast</button>
        <button onClick={handleCreateToast2}>Primary toast top-left</button>
        <button onClick={handleCreateToast3}>Danger toast top</button>
        <button onClick={handleCreateToast4}>Short-duration toast bottom-right</button>
        <button onClick={handleCreateToast5}>Persisting toast bottom</button>
      </header>
    </div >
  );
}

const AppWithToastProvider = withToastProvider(App);

export default AppWithToastProvider;
