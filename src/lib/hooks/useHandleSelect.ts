import { useState, useCallback } from "react";

interface UseHandleSelectProps {
  multiple?: boolean;
  onSelect: (value: string | string[]) => void;
}

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

  return { handleSelect, selectedValues, setSelectedValues, isOpen, setIsOpen };
};

export default useHandleSelect;
