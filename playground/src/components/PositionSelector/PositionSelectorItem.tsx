import React from 'react';
import classnames from 'classnames';

interface PositionSelectorItemProps {
  value: string,
  selected?: boolean,
  onClick: (e: any) => void
}

const PositionSelectorItem: React.FC<PositionSelectorItemProps> = ({ children, value, selected, onClick }) => {
  const itemClasses = classnames('PositionSelector__item', {
    'PositionSelector__item--selected': selected
  })

  return (
    <div className={itemClasses} onClick={() => onClick(value)}>
      {children}
    </div>

  );
}

export default PositionSelectorItem;
