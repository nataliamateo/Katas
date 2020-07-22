import React from 'react';
import '../stylesheets/App.scss';
import Kata1 from './Kata1';
import Kata2 from './Kata2';
import Kata3 from './Kata3';

const App = () => {
  return (
    <div className='App'>
      <Kata1 />
      <Kata2 />
      <Kata3 />
    </div>
  );
};

export default App;
