import React from 'react';
import '../stylesheets/TextResult.scss';

const TextResult = (props) => {
  return (
    <div className='container'>
      <textarea className='container__textarea' id='text' name='text' rows='8' defaultValue={props.value} placeholder='Traducción'></textarea>
    </div>
  );
};

export default TextResult;
