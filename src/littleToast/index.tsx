import React from 'react';

interface MyComponentProps {
  text: string;
  color?: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ text, color }) => (
  <h1>{text}</h1>
);

export { MyComponentProps, MyComponent };