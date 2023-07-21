import { useState, useCallback, ChangeEvent } from "react";

const useInputChange = (setFilter: (filter: string) => void) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      setFilter(newValue);
    },
    [setFilter]
  );

  return { inputValue, handleInputChange };
};

export default useInputChange;
