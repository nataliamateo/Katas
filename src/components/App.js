import React from 'react';
import '../stylesheets/App.scss';
import Kata1 from './Kata1';
import Kata2 from './Kata2';
import Kata3 from './Kata3';
import Kata4 from './Kata4';
import Kata5 from './Kata5';
import Kata6 from './Kata6';
import Kata7 from './Kata7';

const App = () => {
  return (
    <div className='App'>
      <h1 className='App__title'>Resultado de katas de Codewars</h1>
      <Kata1 />
      <Kata2 />
      <Kata3 />
      <Kata4 />
      <Kata5 />
      <Kata6 />
      <Kata7 />
    </div>
  );
};

export default App;
