import React from 'react';
import '../stylesheets/TextInput.scss';

const TextInput = (props) => {
  const handleOnChange = (ev) => {
    const value = ev.target.value;
    props.onChangeText(value);
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
