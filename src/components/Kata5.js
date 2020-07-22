import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata5.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const AlphabetPosition = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const getAlphabetPosition = (text) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return text
      .toLowerCase()
      .split('')
      .filter((character) => alphabet.includes(character))
      .map((letter) => alphabet.indexOf(letter) + 1)
      .join(' ');
  };

  return (
    <div className='kata5'>
      <h2 className='kata5__title'>Reemplazar las letras por la posición que ocupan en el alfabeto </h2>
      <p className='kata5__text'>Cada letra se reemplaza por el número de posición que ocupan actualmente en el alfabeto:</p>
      <div className='kata5__alphabetPosition'>
        <TextInput onChangeText={changeText} />
        <TextResult value={getAlphabetPosition(text)} />
      </div>
    </div>
  );
};

export default AlphabetPosition;
