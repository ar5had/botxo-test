import React from 'react';
import Data from './Data';
import "../styles/data-viewer.css";

const DataViewer = () => {
  return (
    <div className="data-viewer-sections">
      <div className="data">
        <Data orderBy="age" />
        <Data orderBy="name" />
      </div>
      <div className="button-wrapper">
        <button className="button primary">Send data order by age</button>
        <button className="button primary">Send data order by name</button>
      </div>
    </div>
  );
};

export default DataViewer;
