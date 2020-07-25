import React from 'react';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <h2 className='nav__title'>Índice</h2>
        <ul className='nav__list'>
          <li className='nav__list--item'>
            <a href='/Kata1' className='url'>
              Kata 1
            </a>
          </li>
          <li>
            <a href='/Kata2' className='url'>
              Kata 2
            </a>
          </li>
          <li>
            <a href='/Kata3' className='url'>
              Kata 3
            </a>
          </li>
          <li>
            <a href='/Kata4' className='url'>
              Kata 4
            </a>
          </li>
          <li>
            <a href='/Kata5' className='url'>
              Kata 5
            </a>
          </li>
          <li>
            <a href='/Kata6' className='url'>
              Kata 6
            </a>
          </li>
          <li>
            <a href='/Kata7' className='url'>
              Kata 7
            </a>
          </li>
          <li>
            <a href='/Kata8' className='url'>
              Kata 8
            </a>
          </li>
          <li>
            <a href='/Kata9' className='url'>
              Kata 9
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
