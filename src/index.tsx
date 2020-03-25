import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import en from "./translations/en.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    saveMissing: false,
    resources: {
      en
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
