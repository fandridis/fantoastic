import React from 'react';
import { useToast, withToastProvider } from './component-lib';
import './App.css';

const App: React.FC = () => {
  const toast = useToast();
  console.log('toast: ', toast);

  const handleCreateToast1 = () => {
    toast.add("A toast is here", {});
  };

  const handleCreateToast2 = () => {
    toast.add("A primary toast is here", { variant: "primary" });
  };

  const handleCreateToast3 = () => {
    toast.add("A danger toast is here", {
      variant: "danger",
      position: "topLeft"
    });
  };

  const handleCreateToast4 = () => {
    toast.add("This toast will close by itself", {
      variant: "primary",
      duration: 3000
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Fantoastic</h1>
        <button onClick={handleCreateToast1}>Create simple toast</button>
        <button onClick={handleCreateToast2}>Create primary toast</button>
        <button onClick={handleCreateToast3}>Create danger toast top-left</button>
        <button onClick={handleCreateToast4}>Create self-closing toast</button>
      </header>
    </div >
  );
}

const AppWithToastProvider = withToastProvider(App);

export default AppWithToastProvider;



// import React, { useEffect } from "react";
// import { useToast } from "./services/littleToastManagement";

// import "./styles.css";

// function Container() {
//   const toast = useToast();

//   useEffect(() => {}, []);

//   const handleCreateToast1 = () => {
//     toast.add("A toast is here");
//   };

//   const handleCreateToast2 = () => {
//     toast.add("A primary toast is here", { variant: "primary" });
//   };

//   const handleCreateToast3 = () => {
//     toast.add("A danger toast is here", {
//       variant: "danger",
//       position: "topLeft"
//     });
//   };

//   const handleCreateToast4 = () => {
//     toast.add("This toast will close by itself", {
//       variant: "primary",
//       duration: 3000
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello from Little Toast Management</h1>
//       <button onClick={handleCreateToast1}>Create simple toast</button>
//       <button onClick={handleCreateToast2}>Create primary toast</button>
//       <button onClick={handleCreateToast3}>Create danger toast top-left</button>
//       <button onClick={handleCreateToast4}>Create self-closing toast</button>
//     </div>
//   );
// }

// export default Container;