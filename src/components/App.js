import React from 'react';
import { useState } from 'react';
import '../stylesheets/App.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const App = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const resultTranslate = (text) => {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className='App'>
      <TextInput onChangeText={changeText} />
      <TextResult value={resultTranslate(text)} />
    </div>
  );
};

export default App;
