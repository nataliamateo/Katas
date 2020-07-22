import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata2.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const Pangram = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const isAPangram = (text) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let letters = text
      .toLowerCase()
      .split('')
      .filter((character) => alphabet.includes(character));

    let letrasVistas = {};

    for (const letter of alphabet) {
      letrasVistas[letter] = 0;
    }

    for (const letter of letters) {
      letrasVistas[letter] += 1;
    }

    for (const count of Object.values(letrasVistas)) {
      if (count === 0) {
        return false;
      }
    }

    return true;
  };

  return (
    <div className='kata2'>
      <h2 className='kata2__title'>Detectando pangramas! </h2>
      <p className='kata2__text'>
        Introduce la frase <span className='kata2__text--bold'>"The quick brown fox jumps over the lazy dog" </span> y mira el resultado:
      </p>
      <div className='kata2__pangram'>
        <TextInput onChangeText={changeText} />
        <TextResult value={isAPangram(text)} />
      </div>
    </div>
  );
};

export default Pangram;
