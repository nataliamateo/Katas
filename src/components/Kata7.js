import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata7.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const BreakStrings = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const result = (text) => {
    let letters = text.trim().split('');
    let result = [];
    let counter = 0;
    let previous = '';

    if (letters.length % 2 === 1) {
      letters.push('_');
    }

    for (const letter of letters) {
      if (counter === 0) {
        previous = letter;
        counter++;
      } else if (counter === 1) {
        result.push(previous + letter);
        counter = 0;
      }
    }
    return result.join(' ');
  };

  return (
    <div className="kata7">
      <h2 className="kata7__title" id="kata7">
        Kata 7. <span className="kata7__title--subtitle"> Divide palabras en pares de dos carácteres</span>
      </h2>
      <p className="kata7__text">Divide una palabra en grupos de 2 carácteres. En caso de que la última palabra sea impar se añade un "_"</p>
      <p>Ej: "ordenador" ---> "or de na do r_"</p>
      <div className="kata7__splitText">
        <TextInput onChangeText={changeText} />
        <TextResult value={result(text)} />
      </div>
    </div>
  );
};

export default BreakStrings;
