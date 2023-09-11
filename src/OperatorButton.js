import React from 'react';

const OperatorButton = ({ operator, onClick, className }) => {
    
  return (
    <button name={operator} onClick={onClick} className={className}>
      {operator}
    </button>
  );
};

export default OperatorButton;
