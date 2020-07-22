import React from 'react';
import '../stylesheets/TextInput.scss';

const TextInput = (props) => {
  const handleOnChange = (ev) => {
    const value = ev.target.value;
    props.onChangeText(value);
  };

  return (
    <div className='container'>
      <textarea className='container__textarea' onChange={handleOnChange} id='text' name='text' rows='8' placeholder='Introduce el texto'></textarea>
    </div>
  );
};

export default TextInput;
