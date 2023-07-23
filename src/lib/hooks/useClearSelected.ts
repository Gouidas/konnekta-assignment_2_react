import { useCallback } from "react";
import { UseClearSelectedProps } from "../types";

const useClearSelected = ({ setSelectedValues }: UseClearSelectedProps) => {
  const clearSelected = useCallback(() => {
    setSelectedValues([]);
  }, [setSelectedValues]);

  return clearSelected;
};

export default useClearSelected;
