import React from 'react';
import './loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="loader">
    <div className="loading">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    </div>
  );
};

export default Loader;
