import React from 'react';
import { useState } from 'react';
import '../stylesheets/CodeViewer.scss';

const CodeViewer = (props) => {
  let [view, setView] = useState(false);

  const handleClick = () => {
    // setView(!view);
    if (view === true) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <div>
      <button className='btn-code' onClick={handleClick}>
        Ver el código
      </button>
      <img className={view ? 'block' : 'none'} src={props.image} width='800' alt='source code'></img>
    </div>
  );
};

export default CodeViewer;
