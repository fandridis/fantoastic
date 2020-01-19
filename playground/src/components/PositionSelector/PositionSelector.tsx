import React from 'react';
import PositionSelectorItem from './PositionSelectorItem';
import './PositionSelector.css';

import { ToastOptions } from '../../types';

interface PositionSelectorProps {
  selectedPosition: ToastOptions['position'],
  onSelectPosition: (position: ToastOptions['position']) => void
}

const PositionSelector: React.FC<PositionSelectorProps> = ({ selectedPosition, onSelectPosition }) => {
  const handleSelectPosition = (position: ToastOptions['position']) => {
    onSelectPosition(position);
  }

  return (
    <div className="PositionSelector">
      <div className="PositionSelector__row">
        <PositionSelectorItem
          value="topLeft"
          selected={selectedPosition === 'topLeft'}
          onClick={handleSelectPosition}
        >
          Top-left
        </PositionSelectorItem>

        <PositionSelectorItem
          value="top"
          selected={selectedPosition === 'top'}
          onClick={handleSelectPosition}
        >
          Top-center
        </PositionSelectorItem>

        <PositionSelectorItem
          value="topRight"
          selected={selectedPosition === 'topRight'}
          onClick={handleSelectPosition}
        >
          Top-right
        </PositionSelectorItem>
      </div>

      <div className="PositionSelector__row">
        <PositionSelectorItem
          value="bottomLeft"
          selected={selectedPosition === 'bottomLeft'}
          onClick={handleSelectPosition}
        >
          Bottom-left
        </PositionSelectorItem>

        <PositionSelectorItem
          value="bottom"
          selected={selectedPosition === 'bottom'}
          onClick={handleSelectPosition}
        >
          Bottom-center
        </PositionSelectorItem>

        <PositionSelectorItem
          value="bottomRight"
          selected={selectedPosition === 'bottomRight'}
          onClick={handleSelectPosition}
        >
          Bottom-right
        </PositionSelectorItem>
      </div>
    </div>

  );
}

export default PositionSelector;
