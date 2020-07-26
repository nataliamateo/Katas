import React from 'react';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <h2 className='nav__title'>Índice</h2>
        <ul className='nav__list'>
          <li className='nav__list--item'>
            <a href='#kata1' className='url'>
              Kata 1
            </a>
          </li>
          <li>
            <a href='#kata2' className='url'>
              Kata 2
            </a>
          </li>
          <li>
            <a href='#kata3' className='url'>
              Kata 3
            </a>
          </li>
          <li>
            <a href='#kata4' className='url'>
              Kata 4
            </a>
          </li>
          <li>
            <a href='#kata5' className='url'>
              Kata 5
            </a>
          </li>
          <li>
            <a href='#kata6' className='url'>
              Kata 6
            </a>
          </li>
          <li>
            <a href='#kata7' className='url'>
              Kata 7
            </a>
          </li>
          <li>
            <a href='#kata8' className='url'>
              Kata 8
            </a>
          </li>
          <li>
            <a href='#kata9' className='url'>
              Kata 9
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
