import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import API from './api/api';

const END_POINT = 'https://swapi.dev/api';
const api = new API(END_POINT);

api.getAllPeople()
  .then((body) => body);

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
