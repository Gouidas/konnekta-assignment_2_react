import React from 'react';
import { OptionProps } from '../../lib/types';

// The Option component is a functional component that represents each individual option in a select box.
const Option: React.FC<OptionProps> = ({ value, isSelected, onSelect, optionRenderer }) => {
  return (
    // 'isSelected' is a boolean indicating whether the current option is selected or not.
    // If 'isSelected' is true, the 'selected' class will be added to this option.
    // When this option is clicked, the 'onSelect' function will be invoked.
    <div 
      className={`option ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      {/* 'optionRenderer' is a function that takes in the 'value' and 'isSelected' and returns a custom JSX. */}
      {/* If 'optionRenderer' is provided, use it to render the option; otherwise, simply display the 'value'. */}
      {optionRenderer ? optionRenderer(value, isSelected) : value}
    </div>
  );
};

// We wrap the Option component in React.memo to prevent unnecessary re-renders.
// This component will only re-render if its props change.
export default React.memo(Option);
