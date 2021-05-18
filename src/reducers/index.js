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
const reducer = (state = initialeState) => state;

export default reducer;
