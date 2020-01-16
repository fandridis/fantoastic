import React from "react";
import "./test-component.scss";
interface IProps {
    theme: "primary" | "secondary";
}
declare const TestComponent: React.FC<IProps>;
export default TestComponent;
