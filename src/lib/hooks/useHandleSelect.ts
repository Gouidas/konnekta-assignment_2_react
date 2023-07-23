import { useState, useCallback } from "react";
import { UseHandleSelectProps } from "../types";

const useHandleSelect = ({ multiple, onSelect }: UseHandleSelectProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback(
    (value: string) => {
      if (multiple) {
        const newValues = selectedValues.includes(value)
          ? selectedValues.filter((v) => v !== value)
          : [...selectedValues, value];
        setSelectedValues(newValues);
        onSelect(newValues);
      } else {
        setSelectedValues([value]);
        onSelect(value);
        setIsOpen(false);
      }
    },
    [multiple, onSelect, selectedValues]
  );

  const handleRemove = useCallback(
    (value: string) => {
      const newValues = selectedValues.filter((v) => v !== value);
      setSelectedValues(newValues);
      onSelect(newValues);
    },
    [onSelect, selectedValues]
  );

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
