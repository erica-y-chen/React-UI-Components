import React from 'react';
import './App.css';

import Screen from './components/DisplayComponents/CalculatorDisplay';
import Body from './components/DisplayComponents/Body';


const App = () => {
  return (
    <div className="calculator">
      <Screen /> 
      <Body /> 
    </div>
  );
};

export default App;
