/* eslint-disable no-console */
/* eslint-disable max-len */

// import { randomHexColor } from '../utils';
import {
  CHANGE_DIRECTION, RANDOMIZE_FIRST_COLOR, RANDOMIZE_LAST_COLOR,
} from '../actions';

// == State
// On récupère le state initial de l'app qu'on vient stocker au niveau du store
const initialeState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// Le reducer est une fonction. On passe le state initial au reducer. Le rôle du reducer est de retrouner toujours un state
// action est un objet, action = {}
const reducer = (stateActuel = initialeState, action = {}) => {
  console.log('state', stateActuel);
  console.log('action', action);
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...stateActuel,
        direction: action.direction,
      };

    case RANDOMIZE_FIRST_COLOR:
      return {
        ...stateActuel,
        nbColors: stateActuel.nbColors + 1,
        // solution 1
        // on a la possibilité de venir éxécuter la fonction randomHexColor directement dans le nouveau state
        // firstColor: randomHexColor(),
        // solution 2
        // placer la donnée dans une propriété de l'objet action. Cette propriété peut s'appeler 'payload'
        firstColor: action.firstColor,
      };

    case RANDOMIZE_LAST_COLOR:
      return {
        ...stateActuel,
        nbColors: stateActuel.nbColors + 1,
        lastColor: action.lastColor,
      };

    default:
      return stateActuel;
  }
};

export default reducer;
