import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <input type="text" value={result} readOnly />
  );
}

export default ResultDisplay;
