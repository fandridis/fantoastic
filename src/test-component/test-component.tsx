import React from "react";

import "./test-component.scss";

interface IProps {
  theme: "primary" | "secondary";
}

const TestComponent: React.FC<IProps> = ({ theme }) => (
  <div className={`test-component test-component-${theme}`}>
    <h1 className="heading">I'm the test component</h1>
    <h2>This is some text.</h2>
  </div>
);

export default TestComponent;
