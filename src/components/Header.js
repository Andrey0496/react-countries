import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdBrightnessMedium } from 'react-icons/md';
import logo from '../logo.svg';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 18px;
  }

  span {
    color: var(--colors-primary);
  }

  .themeSwitcher {
    border: none;
    background-color: transparent;
    padding: 0;

    font-size: 22px;
    color: var(--colors-text-secondary);
    margin-left: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
  }
`;

export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme') || 'light'
    );

    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <HeaderStyles>
      <Link to="/">
        <img src={logo} alt="logo" />
        <h1>
          React <span>Countries</span>
        </h1>
      </Link>
      <button className="themeSwitcher" onClick={switchTheme}>
        <MdBrightnessMedium />
      </button>
    </HeaderStyles>
  );
}
