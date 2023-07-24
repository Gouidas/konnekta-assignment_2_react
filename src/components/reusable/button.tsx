import React from 'react';
import { ClearButtonProps } from "../../lib/types";

const ClearButton: React.FC<ClearButtonProps> = ({ clearSelected, text }) => (
  <button className="button" onClick={clearSelected}>{text}</button>
);

export default ClearButton;