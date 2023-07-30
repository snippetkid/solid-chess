import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Board } from './components/Board';

const App: Component = () => {
  return (
    <div class={styles.App}>
    <Board/>
    </div>
  );
};

export default App;
