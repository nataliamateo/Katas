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
    <div className="kata1">
      <h2 className="kata1__title" id="kata1">
        Kata 1. <span className="kata1__title--subtitle">Capitalizar la primera letra de cada palabra </span>
      </h2>
      <p> Ej: hola cómo estás ---> Hola Cómo Estás</p>
      <div className="kata1__casingStrings">
        <TextInput onChangeText={changeText} />
        <TextResult value={resultTranslate(text)} />
      </div>
    </div>
  );
};

export default CasingStrings;
