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
      <button onClick={handleClick}>ver el codigo</button>
      <img className={view ? 'block' : 'none'} src={props.image} width='900' alt='source code'></img>
    </div>
  );
};

export default CodeViewer;
