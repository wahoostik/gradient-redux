/* eslint-disable no-console */
/* eslint-disable max-len */
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
    case 'CHANGE_DIRECTION_TO_LEFT':
      return {
        ...state,
        direction: '270deg',
      };

    default:
      return state;
  }
};

export default reducer;
