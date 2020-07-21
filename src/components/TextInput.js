import React from 'react';
import '../stylesheets/TextInput.scss';

const TextInput = () => {
  const handleOnChange = (ev) => {
    const value = ev.target.value;

    console.log(value);
  };

  return (
    <div className='container'>
      <label className='container__title' htmlFor='text'>
        Escribe aqui tu texto :
      </label>
      <textarea className='container__textarea' onChange={handleOnChange} id='text' name='text' rows='8'></textarea>
    </div>
  );
};

export default TextInput;
