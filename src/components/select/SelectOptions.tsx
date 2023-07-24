import React from 'react';
import Option from './Option';
import NoData from './NoData';
import { SelectOptionsProps } from '../../lib/types';

// This component displays the list of options for the Select component
const SelectOptions: React.FC<SelectOptionsProps> = ({ values, selectedValues, handleSelect, filter, optionRenderer }) => {
  
  // This logic filters the values based on the current filter text
  const filteredValues = values.filter(val => val.toLowerCase().includes(filter.toLowerCase()));

  // If after filtering, there are no values left, display the NoData component
  if (filteredValues.length === 0) {
    return <NoData />;
  }

  return (
    // For each filtered value, an Option component is created
    // The Option component gets props to show if it is selected and a function to select it
    // Also, each Option component gets the custom optionRenderer function, if one has been provided
    <div className="options">
      {filteredValues.map(value => (
        <Option 
          key={value} 
          value={value} 
          isSelected={selectedValues.includes(value)} 
          onSelect={() => handleSelect(value)} 
          optionRenderer={optionRenderer}
        />
      ))}
    </div>
  );
};

// Use React.memo to avoid unnecessary re-renders of the SelectOptions component
export default React.memo(SelectOptions);
