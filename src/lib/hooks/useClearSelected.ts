import { useCallback } from "react";
import { UseClearSelectedProps } from "../types";

// useClearSelected is a custom hook that is used to clear selected items in a select list
const useClearSelected = ({ setSelectedValues }: UseClearSelectedProps) => {
  // useCallback is used to memoize the clearSelected function
  // It will only create a new version of the function when setSelectedValues changes
  // This optimizes performance by preventing unnecessary function re-creations
  const clearSelected = useCallback(() => {
    // setSelectedValues is a function that sets the selected values to an empty array
    setSelectedValues([]);
  }, [setSelectedValues]);

  // The hook returns the clearSelected function
  return clearSelected;
};

export default useClearSelected;
