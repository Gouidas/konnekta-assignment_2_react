import React from 'react';
import SelectedItems from './SelectedItems';
import ClearButton from '../reusable/button';
import { SelectionSectionProps } from '../../lib/types';

const SelectionSection: React.FC<SelectionSectionProps> = ({selectedValues, clearSelected, handleRemove}) => {
  if (selectedValues.length === 0) {
    return null;
  }
  
  return (
    <div className='selectedItems absolute r-full'>
      <ClearButton clearSelected={clearSelected} text="Clear Selection" />
      <div>
        <SelectedItems selectedValues={selectedValues} handleRemove={handleRemove} />
      </div>
    </div>
  )
}

export default SelectionSection;