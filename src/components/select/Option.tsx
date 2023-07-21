import React from 'react';
import { OptionProps } from '../../lib/types';

const Option: React.FC<OptionProps> = ({ value, isSelected, onSelect }) => (
  <div
    className={`option ${isSelected ? 'selected' : ''}`}
    onClick={onSelect}
  >
    {value}
  </div>
);

export default Option;
