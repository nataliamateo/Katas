import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata3.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const MiddleCharacter = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const getMiddle = (text) => {
    var length = text.length;
    if (length === 1) {
      return text;
    } else if (length % 2 === 0) {
      var half = length / 2;
      return text.charAt(half - 1) + text.charAt(half);
    } else {
      var half = Math.floor(length / 2);
      return text.charAt(half);
    }
  };

  return (
    <div className='kata3'>
      <h2 className='kata3__title'>Retornando la letra del medio </h2>
      <p className='kata3__text'>Si la palabra es par devolverá una letra, si es impar devolverá dos:</p>
      <div className='kata3__middleCharacter'>
        <TextInput onChangeText={changeText} />
        <TextResult value={getMiddle(text)} />
      </div>
    </div>
  );
};

export default MiddleCharacter;
