import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Kata1 from './Kata1';
import Kata2 from './Kata2';
import Kata3 from './Kata3';
import Kata4 from './Kata4';
import Kata5 from './Kata5';
import Kata6 from './Kata6';
import Kata7 from './Kata7';
import Kata8 from './Kata8';
import CodeViewer from './CodeViewer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='App__container'>
        <h1 className='App__container--title'>Resultado de katas de Codewars</h1>
        <Kata1 />
        <CodeViewer image='./images/kata1.png' />
        <Kata2 />
        <CodeViewer image='./images/kata2.png' />
        <Kata3 />
        <CodeViewer image='./images/kata3.png' />
        <Kata4 />
        <CodeViewer image='./images/kata4.png' />
        <Kata5 />
        <CodeViewer image='./images/kata5.png' />
        <Kata6 />
        <CodeViewer image='./images/kata6.png' />
        <Kata7 />
        <CodeViewer image='./images/kata7.png' />
        <Kata8 />
        <CodeViewer image='./images/kata8.png' />
      </main>
    </div>
  );
};

export default App;
