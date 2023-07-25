import React, { useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';
import useHandleSelect from '../../lib/hooks/useHandleSelect';
import useClearSelected from '../../lib/hooks/useClearSelected';
import SelectInput from './SelectInput';
import SelectOptions from './SelectOptions';
import SelectedItems from './SelectedItems';
import ClearButton from '../reusable/button';
import { SelectProps } from '../../lib/types';
import useOptionRenderer from '../../lib/hooks/useOptionRenderer';

// The Select component serves to display a dropdown of selectable values and manage selections
const Select: React.FC<SelectProps> = ({ values, onSelect, multiple = false, required, placeholder}) => {
  // Using a custom hook to handle the selection of values from dropdown
  const { handleSelect, handleRemove, selectedValues, isOpen, setIsOpen, setSelectedValues } = useHandleSelect({ multiple, onSelect });

  // A state to handle the input value in the filter/search box
  const [filter, setFilter] = useState('');

  // Node is used to refer to the dropdown container for detecting clicks outside the dropdown
  const node = useRef<HTMLDivElement | null>(null);

  // Use the useOutsideClick hook to close the dropdown when clicked outside
  useOutsideClick(node, () => setIsOpen(false));

  // Check for error if the dropdown is required but no values are provided
  const error = required && values.length === 0;

  // New state variable to track if the required validation error should be displayed
  const [showRequiredError, setShowRequiredError] = useState(false);

  // If the Select component is required and no value is selected, display the error
  useEffect(() => {
    if (required && selectedValues.length === 0) {
      setShowRequiredError(true);
    } else {
      setShowRequiredError(false);
    }
  }, [selectedValues, required]);

  // Hook for clearing all selected values
  const clearSelected = useClearSelected({ setSelectedValues });

  // Hook for customizing how the dropdown options are rendered
  const optionRenderer = useOptionRenderer();

  return (
    <div className='selectBox flex relative'>
      <div className={`select ${(error || showRequiredError) ? 'error' : ''}`} ref={node} data-testid="select-div">
        <SelectInput setIsOpen={setIsOpen} isOpen={isOpen} placeholder={placeholder} error={error || showRequiredError} setFilter={setFilter} />
        {/* Conditionally render the dropdown options if the dropdown is open */}
        {isOpen && (
          <SelectOptions values={values} selectedValues={selectedValues} handleSelect={handleSelect} filter={filter} optionRenderer={optionRenderer}/>
        )}
      </div>
      {/* Conditionally render the selected items and the clear button if there are any selected values */}
      {selectedValues.length > 0 && (
        <div className='selectedItems absolute r-full'>
            <ClearButton clearSelected={clearSelected} text="Clear Selection" />
          <div>
            <SelectedItems selectedValues={selectedValues} handleRemove={handleRemove} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
