import React from 'react';
import arrowDownIcon from '../../assets/arrow-down-icon.svg';
import { SelectInputProps } from '../../lib/types';
import useInputChange from '../../lib/hooks/useInputChange';

// This component is the input part of the Select component.
// It includes the dropdown arrow and a text input for searching when the dropdown is open.
const SelectInput: React.FC<SelectInputProps> = ({ setIsOpen, isOpen, placeholder, error, setFilter }) => {
  // The useInputChange hook is used to manage the value and change handler for the input.
  const { inputValue, handleInputChange } = useInputChange(setFilter);

  return (
    // The onClick handler toggles the dropdown's open/closed state.
    // The 'open' and 'error' classes are added conditionally based on state.
    <div className={`selected-value ${error ? 'error' : ''} ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      {/* If the dropdown is open, a label and text input for searching are displayed. */}
      {isOpen ? (
        <>
          <div className="label">
            {placeholder || 'Select...'}
          </div>
          <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange} 
            placeholder="Search..."
            // Stop propagation of click events on the input to prevent the dropdown from closing.
            onClick={(e) => e.stopPropagation()}
          />
        </>
      ) : (
        // If the dropdown is not open, just the placeholder or 'Select...' is displayed.
        placeholder || 'Select...'
      )}
      {/* The dropdown arrow is always displayed. */}
      <img className={`arrow-icon ${isOpen ? 'open' : ''} ${error ? 'error' : ''}`} src={arrowDownIcon} alt="Arrow Down Icon" />
    </div>
  );
};

export default SelectInput;
