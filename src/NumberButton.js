import React from 'react';

const NumberButton = ({ number, onClick }) => {
  return (
    <button name={number} onClick={onClick}>
      {number}
    </button>
  );
};

export default NumberButton;
