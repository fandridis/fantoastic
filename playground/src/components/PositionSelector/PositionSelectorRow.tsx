import React, { useState } from 'react';

const PositionSelectorRow: React.FC = ({ children }) => {
  const handleClick = (e: any, data: any) => {
    e.stopPropagation();
    alert(data);
  }

  return (
    <div className="PositionSelector">
      {children}
    </div>

  );
}

export default PositionSelectorRow;
