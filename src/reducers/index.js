/* eslint-disable no-console */
/* eslint-disable max-len */

// import { randomHexColor } from '../utils';
import {
  CHANGE_DIRECTION_TO_LEFT, CHANGE_DIRECTION_TO_RIGHT, RANDOMIZE_FIRST_COLOR, RANDOMIZE_LAST_COLOR,
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
const reducer = (state = initialeState, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case CHANGE_DIRECTION_TO_LEFT:
      // Ici on crée un nouvel objet pour le state. On est en déclaratif, il y a toujours la notion d'immutabilité
      return {
        ...state,
        direction: '270deg',
      };

    case CHANGE_DIRECTION_TO_RIGHT:
      return {
        ...state,
        direction: '90deg',
      };

    case RANDOMIZE_FIRST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        // solution 1
        // on a la possibilité de venir éxécuter la fonction randomHexColor directement dans le nouveau state
        // firstColor: randomHexColor(),
        // solution 2
        // placer la donnée dans une propriété de l'objet action. Cette propriété peut s'appeler 'payload'
        firstColor: action.firstColor,
      };

    case RANDOMIZE_LAST_COLOR:
      return {
        ...state,
        nbColors: state.nbColors + 1,
        lastColor: action.lastColor,
      };

    default:
      return state;
  }
};

export default reducer;
