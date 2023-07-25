import { useState, useEffect, useCallback, ChangeEvent } from "react";

// useDebounce is a helper hook that debounces an input for a specified amount of time
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// useInputChange is a custom hook that manages the state and logic of an input element
const useInputChange = (setFilter: (filter: string) => void) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setFilter(debouncedInputValue);
  }, [debouncedInputValue, setFilter]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  }, []);

  return { inputValue, handleInputChange };
};

export default useInputChange;
