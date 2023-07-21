import React from 'react';
import arrowDownIcon from '../../assets/arrow-down-icon.svg';
import { SelectInputProps } from '../../lib/types';
import useInputChange from '../../lib/hooks/useInputChange';


const SelectInput: React.FC<SelectInputProps> = ({ setIsOpen, isOpen, placeholder, error, setFilter }) => {
  const { inputValue, handleInputChange } = useInputChange(setFilter);


  return (
    <div className={`selected-value ${error ? 'error' : ''} ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
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
            onClick={(e) => e.stopPropagation()}
          />
        </>
      ) : (
        placeholder || 'Select...'
      )}
      <img className={`arrow-icon ${isOpen ? 'open' : ''} ${error ? 'error' : ''}`} src={arrowDownIcon} alt="Arrow Down Icon" />
    </div>
  );
};

export default SelectInput;
