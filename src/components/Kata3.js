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
    let length = text.length;
    if (length === 1) {
      return text;
    } else if (length % 2 === 0) {
      let half = length / 2;
      return text.charAt(half - 1) + text.charAt(half);
    } else {
      let half = Math.floor(length / 2);
      return text.charAt(half);
    }
  };

  return (
    <div className='kata3'>
      <h2 className='kata3__title' id='kata3'>
        Kata 3. <span className='kata3__title--subtitle'> Retornando la letra del medio</span>{' '}
      </h2>
      <p className='kata3__text'>Si la palabra es par devolverá una letra, si es impar devolverá dos:</p>
      <div className='kata3__middleCharacter'>
        <TextInput onChangeText={changeText} />
        <TextResult value={getMiddle(text)} />
      </div>
    </div>
  );
};

export default MiddleCharacter;
