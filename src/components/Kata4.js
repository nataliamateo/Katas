import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata4.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const CamelCase = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const toCamelCase = (text) => {
    if (text.length === 0) {
      return '';
    }

    let result = text
      .toLowerCase()
      .replace(/-|_/gi, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return text.charAt(0) + result.slice(1);
  };

  return (
    <div className='kata4'>
      <h2 className='kata4__title' id='kata4'>
        CamelCase
      </h2>
      <p className='kata4__text'>Escribe una frase para ver el resultado de camelCase:</p>
      <div className='kata4__camelCase'>
        <TextInput onChangeText={changeText} />
        <TextResult value={toCamelCase(text)} />
      </div>
    </div>
  );
};

export default CamelCase;
