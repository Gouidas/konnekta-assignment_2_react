import React from 'react';
import { SelectedItemsProps } from '../../lib/types';

// The SelectedItems component is a functional component responsible for rendering all the selected items in a multi-select dropdown.
const SelectedItems: React.FC<SelectedItemsProps> = ({ selectedValues, handleRemove }) => {
  return (
    // Each selected item is rendered as a 'div' element.
    // The 'key' prop is set as the value of the item for React to track individual items efficiently.
    <div className="selected-items">
      {selectedValues.map(value => (
        // When a selected item is clicked, the 'handleRemove' function is called with the item's value,
        // which will then remove this item from the list of selected items.
        <div className="selected-item" key={value} onClick={() => handleRemove(value)}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default SelectedItems;
