import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata9.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const SpinningWords = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  function spinWords(str) {
    var words = str
      .split(' ')
      .map((word) => (word.length >= 5 ? [...word].reverse().join('') : word))
      .join(' ');

    return words;
  }

  return (
    <div className="kata9">
      <h2 className="kata9__title" id="kata9">
        Kata 9. <span className="kata9__title--subtitle">Palabras invertidas</span>
      </h2>
      <p className="kata9__text">Si la palabra contiene 5 o más letras se invertirá el órden de la palabra.</p>
      <p>Ej: Ordenador ---> rodanedrO</p>
      <div className="kata9__spinWord">
        <TextInput onChangeText={changeText} />
        <TextResult value={spinWords(text)} />
      </div>
    </div>
  );
};

export default SpinningWords;
