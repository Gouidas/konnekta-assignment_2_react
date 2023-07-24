import React from 'react';
import emptyFolderImage from '../../assets/emptyFolder.png';

// The NoData component is a functional component that renders an "empty state" UI.
// This is typically used when there's no data to be displayed in a list or table.
const NoData: React.FC = () => (
  <div className="options empty-state flex flex-col items-center">
    {/* Display an image indicating an empty state (empty folder in this case) */}
    <img src={emptyFolderImage} alt="Empty Folder" />

    {/* Display a message to the user indicating no data is available */}
    <div className="no-data">No data</div>
  </div>
);

export default NoData;
