import React, { useState, useEffect, useRef } from 'react';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';
import useHandleSelect from '../../lib/hooks/useHandleSelect';
import useClearSelected from '../../lib/hooks/useClearSelected';
import SelectInput from './SelectInput';
import SelectOptions from './SelectOptions';
import SelectionSection from './SelectionSection';
import { SelectProps } from '../../lib/types';
import useOptionRenderer from '../../lib/hooks/useOptionRenderer';
import useError from '../../lib/hooks/useError';
import ErrorComponent from '../reusable/Error';

// The Select component serves to display a dropdown of selectable values and manage selections
const Select: React.FC<SelectProps> = ({ values, onSelect, multiple = false, required, placeholder }) => {
  // Using a custom hook to handle the selection of values from dropdown
  const { handleSelect, handleRemove, selectedValues, isOpen, setIsOpen, setSelectedValues } = useHandleSelect({ multiple, onSelect });

  // A state to handle the input value in the filter/search box
  const [filter, setFilter] = useState('');

  // Node is used to refer to the dropdown container for detecting clicks outside the dropdown
  const node = useRef<HTMLDivElement | null>(null);

  // Use the useOutsideClick hook to close the dropdown when clicked outside
  useOutsideClick(node, () => setIsOpen(false));

  // Use the useError hook to manage error state
  const { error: requiredError, showError, dismissError } = useError();

  // If the Select component is required and no value is selected, display the error
  useEffect(() => {
    if (required && selectedValues.length === 0) {
      showError('You need to add an item in the list');
    } else {
      dismissError();
    }
  }, [selectedValues, required]);

  // Hook for clearing all selected values
  const clearSelected = useClearSelected({ setSelectedValues });

  // Hook for customizing how the dropdown options are rendered
  const optionRenderer = useOptionRenderer();

  return (
    <div className='selectBox flex relative'>
      <div className={`select ${requiredError.visible ? 'error' : ''}`} ref={node} data-testid="select-div">
        <SelectInput setIsOpen={setIsOpen} isOpen={isOpen} placeholder={placeholder} error={requiredError.visible} setFilter={setFilter} />
        {/* Conditionally render the dropdown options if the dropdown is open */}
        {isOpen && (
          <SelectOptions values={values} selectedValues={selectedValues} handleSelect={handleSelect} filter={filter} optionRenderer={optionRenderer}/>
        )}
      </div>
      <SelectionSection selectedValues={selectedValues} clearSelected={clearSelected} handleRemove={handleRemove} />
      <ErrorComponent message={requiredError.message} visible={requiredError.visible} dismissError={dismissError} dismissable={false} />

    </div>
  );
};

export default Select;
