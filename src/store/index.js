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
const store = createStore(reducer);
console.log('store', store);
console.log('store getState', store.getState());

export default store;
