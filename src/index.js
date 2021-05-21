import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
// import du store
import store from 'src/store';

const target = document.getElementById('root');
const rootElement = (
  // ici on vient englober notre application avec le composant Provider
  // que nous fournit react-redux. Ce composant va mettre à disposition
  // de notre application le store. Le store c'est celui qu'on a créé pour
  // notre application vanilla
  <Provider store={store}>
    <App />
  </Provider>

);

render(rootElement, target);
