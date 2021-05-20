import { randomHexColor } from '../utils';
// Action types
// on vient les stocker dans une const
// - auto-complétion
// - erreur levée si on se trompe dans le nom de la const
export const CHANGE_DIRECTION_TO_LEFT = 'CHANGE_DIRECTION_TO_LEFT';
export const CHANGE_DIRECTION_TO_RIGHT = 'CHANGE_DIRECTION_TO_RIGHT';
export const RANDOMIZE_FIRST_COLOR = 'RANDOMIZE_FIRST_COLOR';
export const RANDOMIZE_LAST_COLOR = 'RANDOMIZE_LAST_COLOR';

// Action creator
// Fonctions qui retournent des objets actions. Avec propriété type
export const changeDirectionToRight = () => ({
  type: CHANGE_DIRECTION_TO_RIGHT,
});

export const changeDirectionToLeft = () => ({
  type: CHANGE_DIRECTION_TO_LEFT,
});

export const randomizeLastColor = () => ({
  type: RANDOMIZE_LAST_COLOR,
  lastColor: randomHexColor(),
});

/*
  const randomizeLastColor = () => {
  return {
  type: RANDOMIZE_LAST_COLOR,
  lastColor: randomHexColor(),
};
};
*/

export const randomizeFirstColor = (firstColorParameter) => ({
  type: RANDOMIZE_FIRST_COLOR,
  firstColor: firstColorParameter,
});
