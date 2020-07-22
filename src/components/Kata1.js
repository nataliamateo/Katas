import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata1.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const CasingStrings = () => {
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
    <div className='kata1'>
      <h2 className='kata1__title'>Capitalizar la primera letra de cada palabra</h2>
      <div className='kata1__casingStrings'>
        <TextInput onChangeText={changeText} />
        <TextResult value={resultTranslate(text)} />
      </div>
    </div>
  );
};

export default CasingStrings;
