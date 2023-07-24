import { useState, useCallback, ChangeEvent } from "react";

// useInputChange is a custom hook that manages the state and logic of an input element
const useInputChange = (setFilter: (filter: string) => void) => {
  // inputValue holds the current value of the input
  const [inputValue, setInputValue] = useState("");

  // handleInputChange is a function that updates inputValue and also calls setFilter
  // setFilter is a function passed as a parameter, intended to filter values based on the input
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value; // Get new input value from the event object
      setInputValue(newValue); // Update inputValue with the new value
      setFilter(newValue); // Update the filter with the new value
    },
    [setFilter]
  );

  // The hook returns the inputValue and the function to handle its changes
  return { inputValue, handleInputChange };
};

export default useInputChange;
