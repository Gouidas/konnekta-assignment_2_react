import { useState, useCallback } from "react";
import { UseHandleSelectProps } from "../types";

// useHandleSelect is a custom hook that manages the state and logic of selection in a select list
const useHandleSelect = ({ multiple, onSelect }: UseHandleSelectProps) => {
  // selectedValues holds the currently selected items
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  // isOpen determines whether the select list is open or not
  const [isOpen, setIsOpen] = useState(false);

  // handleSelect is a function that adds or removes a value from selectedValues based on whether multiple selection is allowed
  const handleSelect = useCallback(
    (value: string) => {
      // If multiple selection is allowed
      if (multiple) {
        // If the value is already selected, remove it from selectedValues
        // Otherwise, add it to selectedValues
        const newValues = selectedValues.includes(value)
          ? selectedValues.filter((v) => v !== value)
          : [...selectedValues, value];
        setSelectedValues(newValues);
        onSelect(newValues);
      } else {
        // If multiple selection is not allowed, replace the current selection with the new value
        setSelectedValues([value]);
        onSelect(value);
        // Close the select list
        setIsOpen(false);
      }
    },
    [multiple, onSelect, selectedValues]
  );

  // handleRemove is a function that removes a value from selectedValues
  const handleRemove = useCallback(
    (value: string) => {
      const newValues = selectedValues.filter((v) => v !== value);
      setSelectedValues(newValues);
      onSelect(newValues);
    },
    [onSelect, selectedValues]
  );

  // The hook returns the necessary state variables and functions for a select list
  return {
    handleSelect,
    handleRemove,
    selectedValues,
    setSelectedValues,
    isOpen,
    setIsOpen,
  };
};

export default useHandleSelect;
