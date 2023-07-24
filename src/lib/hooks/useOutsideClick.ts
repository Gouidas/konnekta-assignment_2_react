import { useCallback, useEffect } from "react";

// useOutsideClick is a custom hook that triggers a callback function when a click event happens outside a specified element
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>, // Ref to the DOM element where click events are to be detected
  callback: () => void // Callback function to be executed when an outside click is detected
): void => {
  // handleClick is a callback function that checks if the click event happened outside of the specified element
  // if it did, it executes the callback function passed to the hook
  const handleClick = useCallback(
    (e: MouseEvent) => {
      // If the click event's target is not within the ref's current element and not within any element with class "selectedItems", call the callback
      if (
        !ref.current?.contains(e.target as Node) &&
        !(e.target as Element).closest(".selectedItems")
      ) {
        callback();
      }
    },
    [callback, ref] // Dependencies for useCallback
  );

  // Add an event listener for mousedown events on the document object
  // This will check for outside clicks whenever a mousedown event happens anywhere in the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    // Cleanup function to remove the event listener when the component unmounts or before the next time useEffect runs
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handleClick]); // Dependency for useEffect
};
