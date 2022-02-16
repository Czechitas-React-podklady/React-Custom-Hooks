import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {
  People,
  Planets,
} from './components';

const App = () => {
  return (
    <>
      <h1>Custom Hooks, baby!</h1>
      <People />
      <Planets />
    </>
  );
}

render(<App />, document.querySelector('#app'));
