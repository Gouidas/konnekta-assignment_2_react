import React from 'react';
import emptyFolderImage from '../../assets/emptyFolder.png';

const NoData: React.FC = () => (
  <div className="options empty-state flex flex-col items-center">
    <img src={emptyFolderImage} alt="Empty Folder" />
    <div className="no-data">No data</div>
  </div>
);

export default NoData;