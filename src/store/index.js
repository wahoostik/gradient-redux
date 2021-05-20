/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-console */
// == Imports
import { createStore } from 'redux';
import reducer from 'src/reducers';

// On aura plus directement accès au state
// le store va prendre en charge ce state.
// La fonction createStore de Redux nous permet de créer ce store
// Le store est un objet qui a 3 méthodes principales
// getState : va nous permettre de récupérer le state courant
// dispatch : va nous permettre de changer des valeurs du state, en donnant une action à faire
// subscribe : une fonction qui nous permet de nous abonner aux changements du state.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// Ce qui se passe dans les coulisses
/*
const myCreateStore = (reducer) => {
//   // on vient récupérer le state courant
  let state = reducer();
//   // on instancie un tableau qui viendra tous les callback
//   // à appeler quand on modifie le state
  const subscribes = [];

  return {
    getState: () => ({ ...state }),
    dispatch: (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe: (callback) => {
      subscribers.push(callback);
    }
  }
}
*/

console.log('store', store);
console.log('store getState', store.getState());

export default store;
