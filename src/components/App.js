import React from 'react';
import '../stylesheets/App.scss';
import Index from './Index';
import Kata1 from './Kata1';
import Kata2 from './Kata2';
import Kata3 from './Kata3';
import Kata4 from './Kata4';
import Kata5 from './Kata5';
import Kata6 from './Kata6';
import Kata7 from './Kata7';
import Kata8 from './Kata8';

const App = () => {
  return (
    <div className='App'>
      <Index />
      <div>
        <h1 className='App__title'>Resultado de katas de Codewars</h1>
        <Kata1 />
        <Kata2 />
        <Kata3 />
        <Kata4 />
        <Kata5 />
        <Kata6 />
        <Kata7 />
        <Kata8 />
      </div>
    </div>
  );
};

export default App;
