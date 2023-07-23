import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';
import useHandleSelect from '../../lib/hooks/useHandleSelect';
import useClearSelected from '../../lib/hooks/useClearSelected';
import SelectInput from './SelectInput';
import SelectOptions from './SelectOptions';
import SelectedItems from './SelectedItems';
import ClearButton from '../reusable/button';
import { SelectProps } from '../../lib/types';
import useOptionRenderer from '../../lib/hooks/useOptionRenderer';

const Select: React.FC<SelectProps> = ({ values, onSelect, multiple = false, required, placeholder}) => {
  const { handleSelect, handleRemove, selectedValues, isOpen, setIsOpen, setSelectedValues } = useHandleSelect({ multiple, onSelect });
  const [filter, setFilter] = useState('');
  const node = useRef<HTMLDivElement | null>(null);
  useOutsideClick(node, () => setIsOpen(false));

  const error = required && values.length === 0;
  const clearSelected = useClearSelected({ setSelectedValues });
  const optionRenderer = useOptionRenderer();

  return (
    <div className='selectBox flex relative'>
      <div className={`select ${error ? 'error' : ''}`} ref={node} data-testid="select-div">
        <SelectInput setIsOpen={setIsOpen} isOpen={isOpen} placeholder={placeholder} error={error} setFilter={setFilter} />
        {isOpen && (
          <SelectOptions values={values} selectedValues={selectedValues} handleSelect={handleSelect} filter={filter} optionRenderer={optionRenderer}/>
        )}
      </div>
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
