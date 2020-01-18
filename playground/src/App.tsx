import React from 'react';
import { useToast, withToastProvider } from './component-lib';
import './App.css';

const App: React.FC = () => {
  const toast = useToast();

  const handleCreateToast1 = () => {
    toast.add('The simplest of the toasts.');
  };

  const handleClick = (e: any, data: any) => {
    e.stopPropagation();
    alert(data);
  }

  const handleCreateToast2 = () => {
    toast.add("A primary toast is here.", { variant: "primary", position: 'topLeft' });
  };

  const handleCreateToast3 = () => {
    toast.add("A danger toast is here with a weirdly long message. Consider adding a larger duration so the user has a chance to read the entire message.", {
      variant: "danger",
      position: "top",
    });
  };

  const handleCreateToast4 = () => {
    toast.add("This toast will persist until closed manually!", {
      variant: "success",
      position: 'bottomRight',
      persist: true,
      withCloseIcon: true
    });
  };

  const handleCreateToast5 = () => {
    const secret = 'There is no spoon.';

    const content = (
      <div>
        <h3>TITLE GOES HERE</h3>
        <p>You can even add HTML as the content of the toast!</p>
        <button onClick={(e) => handleClick(e, secret)}>Click me</button>
      </div>
    );

    toast.add(content, { persist: true, withCloseIcon: true });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is fantoastic!</h1>
        <button onClick={handleCreateToast1}>Default toast</button>
        <button onClick={handleCreateToast2}>Primary toast top-left</button>
        <button onClick={handleCreateToast3}>Danger toast top</button>
        <button onClick={handleCreateToast4}>Persisting toast bottom-right</button>
        <button onClick={handleCreateToast5}>HTML toast</button>
      </header>
    </div >
  );
}

const AppWithToastProvider = withToastProvider(App);

export default AppWithToastProvider;
