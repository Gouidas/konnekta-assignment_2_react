import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../../lib/hooks/useOutsideClick';
import useHandleSelect from '../../lib/hooks/useHandleSelect';
import SelectInput from './SelectInput';
import SelectOptions from './SelectOptions';
import SelectedItems from './SelectedItems';
import { SelectProps } from '../../lib/types';


const Select: React.FC<SelectProps> = ({ values, onSelect, multiple, required, placeholder }) => {
  const { handleSelect, selectedValues, isOpen, setIsOpen } = useHandleSelect({ multiple, onSelect });
  const [filter, setFilter] = useState('');
  const node = useRef<HTMLDivElement | null>(null);
  useOutsideClick(node, () => setIsOpen(false));

  const error = required && !selectedValues.length;

  return (
    <div className='flex relative'>
      <div className={`select ${error ? 'error' : ''}`} ref={node}>
        <SelectInput setIsOpen={setIsOpen} isOpen={isOpen} placeholder={placeholder} error={error} setFilter={setFilter} />
        {isOpen && (
          <SelectOptions values={values} selectedValues={selectedValues} handleSelect={handleSelect} filter={filter} />
        )}
      </div>
      <div className='absolute r-full'>
        <SelectedItems selectedValues={selectedValues} />
      </div>
    </div>
  );
};

export default Select;
