import { useCallback, useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
): void => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (
        !ref.current?.contains(e.target as Node) &&
        !(e.target as Element).closest(".selectedItems")
      ) {
        callback();
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick]);
};
