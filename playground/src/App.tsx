import React from 'react';
import logo from './logo.svg';
import {MyComponent} from './component-lib';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent text="Hello World!" color="pink" />
      </header>
    </div>
  );
}

export default App;
