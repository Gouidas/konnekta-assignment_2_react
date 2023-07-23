import React from 'react';
import { SelectedItemsProps } from '../../lib/types';

const SelectedItems: React.FC<SelectedItemsProps> = ({ selectedValues, handleRemove }) => {
  return (
    <div className="selected-items">
      {selectedValues.map(value => (
        <div className="selected-item" key={value} onClick={() => handleRemove(value)}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default SelectedItems;

