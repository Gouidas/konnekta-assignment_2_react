import React from 'react';
import { SelectedItemsProps } from '../../lib/types';

const SelectedItems: React.FC<SelectedItemsProps> = ({ selectedValues }) => {
  return (
    <div className="selected-items">
      {selectedValues.map(value => (
        <div className="selected-item" key={value}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default SelectedItems;
