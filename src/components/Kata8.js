import React from 'react';
import { useState } from 'react';
import '../stylesheets/Kata8.scss';
import TextInput from './TextInput';
import TextResult from './TextResult';

const HashtagGenerator = () => {
  let [text, setText] = useState('');

  const changeText = (value) => {
    setText(value);
  };

  const generateHashtag = (text) => {
    var letters = text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    if (letters === '') {
      return letters;
    } else if (letters.length >= 140) {
      return false;
    } else {
      return '#' + letters;
    }
  };

  return (
    <div className="kata8">
      <h2 className="kata8__title" id="kata8">
        Kata 8. <span className="kata8__title--subtitle">Generador de Hashtag</span>
      </h2>
      <p className="kata8__text">Genera un Hashtag, capitaliza todas las palabras y retorna false si se superan los 140 carácteres.</p>
      <p>Ej: hola cómo estás ---> #HolaCómoEstás</p>
      <div className="kata8__generateHashtag">
        <TextInput onChangeText={changeText} />
        <TextResult value={generateHashtag(text)} />
      </div>
    </div>
  );
};

export default HashtagGenerator;
