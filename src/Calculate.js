import React, { useState } from 'react';

const Calculate = ({ result, setResult }) => {
  const [expression, setExpression] = useState(''); // Utilisez le hook useState pour conserver l'expression

  const calculate = () => {
    try {
      const calculatedResult = eval(result).toString(); // Évalue l'expression pour obtenir le résultat
      setResult(calculatedResult); // Met à jour le résultat avec le résultat calculé
      setExpression(result); // Stocke l'expression dans l'état local
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <button className='highlight' onClick={calculate} id="result">=</button>
  );
};

export default Calculate;
