import React from 'react';

// LoadingScreen component represents a simple loading screen to be displayed while some data is being fetched or processed
const LoadingScreen: React.FC = () => {
  return (
    // The outer div acts as a container for the loading text.
    <div className="loading-screen">
      {/* This div contains the text that will be displayed while loading */}
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
