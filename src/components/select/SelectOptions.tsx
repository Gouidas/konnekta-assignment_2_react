import React from 'react';
import Option from './Option';
import NoData from './NoData';
import { SelectOptionsProps } from '../../lib/types';

const SelectOptions: React.FC<SelectOptionsProps> = ({ values, selectedValues, handleSelect, filter }) => {
  const filteredValues = values.filter(val => val.toLowerCase().includes(filter.toLowerCase()));

  if (filteredValues.length === 0) {
    return <NoData />;
  }

  return (
    <div className="options">
      {filteredValues.map(value => (
        <Option 
          key={value} 
          value={value} 
          isSelected={selectedValues.includes(value)} 
          onSelect={() => handleSelect(value)} 
        />
      ))}
    </div>
  );
};

export default React.memo(SelectOptions);
