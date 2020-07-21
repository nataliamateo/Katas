import React from 'react';
import '../stylesheets/App.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

function App() {
  return (
    <div className='App'>
      <TextInput />
      <TextResult />
    </div>
  );
}

export default App;
