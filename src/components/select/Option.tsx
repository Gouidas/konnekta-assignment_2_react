import React from 'react';
import { OptionProps } from '../../lib/types';

const Option: React.FC<OptionProps> = ({ value, isSelected, onSelect, optionRenderer }) => {
  return (
    <div 
      className={`option ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      {optionRenderer ? optionRenderer(value, isSelected) : value}
    </div>
  );
};

export default React.memo(Option);
