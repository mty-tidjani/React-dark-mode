import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const DarkSwitch: React.FC<unknown> = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (!theme) {
      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (dark) document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  });

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <label className="dark-switch">
      <input checked={theme === "dark"} type="checkbox" onChange={toggleDark} />
      <span className="slider">🌞</span>
    </label>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DarkSwitch />
      </header>
    </div>
  );
}

export default App;
