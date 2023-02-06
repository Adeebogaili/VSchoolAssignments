import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Main() {
    const {color, toggleTheme} = useContext(ThemeContext)
  return (
    <section className={`${color}`}>
        <h1>click the button to toggle {color} theme!</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </section>
    );
}

export default Main;