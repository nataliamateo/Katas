import React from 'react';
import '../stylesheets/TextResult.scss';

const TextResult = () => {
  return (
    <div className='container'>
      <label className='container__title' htmlFor='text'>
        Traducción :
      </label>
      <textarea className='container__textarea' id='text' name='text' rows='8'></textarea>
    </div>
  );
};

export default TextResult;
