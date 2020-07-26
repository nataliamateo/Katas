import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata6.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const Vocals = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const AE = (text) => {
    let letters = text.toLowerCase().split('');

    let a = 0;
    let e = 0;

    for (const letter of letters) {
      if (letter === 'a') {
        a += 1;
      }

      if (letter === 'e') {
        e += 1;
      }
    }

    if (a === 0 && e === 0) {
      return true;
    }
    return a === e;
  };

  return (
    <div className='kata6'>
      <h2 className='kata6__title' id='kata6'>
        Kata 6. <span className='kata6__title--subtitle'>Verificar si hay el mismo número de "a" y de "e"</span>
      </h2>
      <p className='kata6__text'>El método retornará true o false dependiendo del caso.</p>
      <div className='kata6__vocals'>
        <TextInput onChangeText={changeText} />
        <TextResult value={AE(text)} />
      </div>
    </div>
  );
};

export default Vocals;
