import './main.css';
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

let memory = 0;

function App() {
  
  const [input, setInput] = useState ('');

  const addInput = val => {
    setInput(input + val);
  };
  
  const memoryRead = () => {
    setInput(input + memory);
  }

  const memoryAdd = () => {
    if (memory === 0) {
      memory += input;
    } else {
      let mem = Number(memory);
      memory = mem += input;
    }
  };
  
  const memorySubtract = () => {
    memory -= input;
  };

  const memoryClear = () => {
    memory = 0;
  }


  const calculateResult = () =>{
    const regEx = new RegExp(/\D$/);
    const regDivision = new RegExp(/\/0$/);
    const regTest = regEx.test(input);
    const divisionTest = regDivision.test(input);
    if (!input){
      setInput('');
    } else if (!regTest && !divisionTest){
      setInput(evaluate(input));
    };
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button manejarClick={memoryRead} >MR</Button>
          <Button manejarClick={addInput} >7</Button>
          <Button manejarClick={addInput} >8</Button>
          <Button manejarClick={addInput} >9</Button>
          <Button manejarClick={addInput} >/</Button>
        </div>
        <div className='row'>
          <Button manejarClick={memoryAdd} >M+</Button>
          <Button manejarClick={addInput} >4</Button>
          <Button manejarClick={addInput} >5</Button>
          <Button manejarClick={addInput} >6</Button>
          <Button manejarClick={addInput} >*</Button>
        </div>
        <div className='row'>
          <Button manejarClick={memorySubtract} >M-</Button>
          <Button manejarClick={addInput} >1</Button>
          <Button manejarClick={addInput} >2</Button>
          <Button manejarClick={addInput} >3</Button>
          <Button manejarClick={addInput} >-</Button>
        </div>
        <div className='row'>
          <Button manejarClick={memoryClear} >MC</Button>
          <Button manejarClick={addInput} >.</Button>
          <Button manejarClick={addInput} >0</Button>
          <Button manejarClick={calculateResult} >=</Button>
          <Button manejarClick={addInput} >+</Button>
        </div>
        <div className='row'>
          <ClearButton manejarClear = {() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>

    </div>
  );
}

export default App;
