// Importing useState hook from 'react'
import { useState } from "react";

// Defining the Error interface
interface Error {
  message: string; // This field will store the error message
  visible: boolean; // This field will control the visibility of the error
}

// useError is a custom hook that manages error handling
const useError = () => {
  // Initializing error state with an empty message and visibility set to false
  const [error, setError] = useState<Error>({ message: "", visible: false });

  // showError is a function that sets the error message and makes it visible
  const showError = (message: string) => setError({ message, visible: true });

  // dismissError is a function that hides the error without changing its message
  const dismissError = () => setError({ ...error, visible: false });

  // The hook returns the current error state, the showError and dismissError functions
  return { error, showError, dismissError };
};

export default useError;
