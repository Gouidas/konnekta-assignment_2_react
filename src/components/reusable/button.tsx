import React from 'react';
import { ClearButtonProps } from "../../lib/types";

// This component represents a button that clears all selected items when clicked
// The button text and the function to clear the selection are passed as props
const ClearButton: React.FC<ClearButtonProps> = ({ clearSelected, text }) => (
  <button 
    className="button" 
    onClick={clearSelected} // The click handler, clearSelected, is passed in as a prop
  >
    {/* The button label is also passed in as a prop */}
    {text} 
  </button>
);

export default ClearButton;
