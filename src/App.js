import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Save from './Save';
import ResultDisplay from './ResultDisplay';
import Over9000 from './Over9000.js';
import Calculate from './Calculate';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1)); // or -1
    }

    return (
        <div className="container">
            <form>
                <ResultDisplay result={result} />
            </form>
            <div className="keypad">
                <OperatorButton operator="Clear" onClick={clear} className="highlight"/>
                <OperatorButton operator="C" onClick={backspace} className="highlight"/>
                <Save expression={result} result={result} />
                <OperatorButton operator="/" onClick={handleClick} className="highlight"/>
                <NumberButton number="8" onClick={handleClick} />
                <NumberButton number="9" onClick={handleClick} />
                <NumberButton number="7" onClick={handleClick} />
                <OperatorButton operator="*" onClick={handleClick} className="highlight"/>
                <NumberButton number="4" onClick={handleClick} />
                <NumberButton number="5" onClick={handleClick} />
                <NumberButton number="6" onClick={handleClick} />
                <OperatorButton operator="-" onClick={handleClick} className="highlight"/>
                <NumberButton number="1" onClick={handleClick} />
                <NumberButton number="2" onClick={handleClick} />
                <NumberButton number="3" onClick={handleClick} />
                <OperatorButton operator="+" onClick={handleClick} className="highlight"/>
                <NumberButton number="0" onClick={handleClick} />
                <OperatorButton operator="." onClick={handleClick} className="highlight"/>
                <Calculate result={result} setResult={setResult} />
            </div>

            <Over9000 result={result} />
        </div>
    );
}


export default App;