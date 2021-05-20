/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// But de la journée
// Ne plus avoir de state dans ce fichier
// Abstraire le state = > le placer dans un store
// Le store ça va être créer/gérer par Redux

// == Imports
import store from './store';

import { randomHexColor, generateSpanColor } from './utils';

// == Rendu dans le DOM
function renderNbColors() {
  // à chaque rendu de la div nbColors, je veux récupérer
  // les nouvelles valeurs du state
  // j'appelle donc store.getState() pour avoir le state courant
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
// On garde l'éxécution de ces 3 fonctions pour le rendu initial
renderNbColors();
renderGradient();
renderColors();

// On souscrit au changements du State
// à chaque fois qu'on va faire un store.dispatch
// une fois que le nouveau state est généré, on veut
// réexécuter chaque fonction de rendu
// pour faire ça, on souscrit aux changements du state avec subscribe
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // but de la journée
    // "Alexa/Store fais cette action"
    // store.fais(action);

    // debug
    console.log('Random all colors');
    // On peut également écrire tout dans le store.dispatch au lieu de faire une const en amont
    store.dispatch({
      type: 'RANDOMIZE_FIRST_COLOR',
      // solution 2 (voir dans le reducer) :
      firstColor: randomHexColor(),
    });
    store.dispatch({
      type: 'RANDOMIZE_LAST_COLOR',
      // solution 2 (voir dans le reducer) :
      lastColor: randomHexColor(),
    });
    // data
    // state.nbColors += 2;
    // state.firstColor = randomHexColor();
    // state.lastColor = randomHexColor();
    // ui
    // renderNbColors();
    // renderGradient();
    // renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const action = {
      type: 'RANDOMIZE_FIRST_COLOR',
      // solution 2 (voir dans le reducer) :
      firstColor: randomHexColor(),
    };
    store.dispatch(action);
    // state.nbColors += 1;
    // state.firstColor = randomHexColor();
    // renderNbColors();
    // renderGradient();
    // renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = {
      type: 'RANDOMIZE_LAST_COLOR',
      lastColor: randomHexColor(),
    };
    store.dispatch(action);
    // state.nbColors += 1;
    // state.lastColor = randomHexColor();
    // renderNbColors();
    // renderGradient();
    // renderColors();
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // ici on veut changer la valeur de la propriété "direction" du state
    // le state est désormais dans le store. Il va donc falloir discuter
    // avec le store. Pour faire ça on va passer par dispatch
    // store.dispatch('CHANGE_LA_DIRECTION');

    // l'action qu'on va donner au store va être un objet
    // une action a toujours une propriété "type"
    // par convention le type d'action est écrit en UPPERCASE_SNAKE_CASE
    const action = {
      type: 'CHANGE_DIRECTION_TO_LEFT',
    };

    store.dispatch(action);

    // state.direction = '270deg';
    // renderGradient();
    // renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = {
      type: 'CHANGE_DIRECTION_TO_RIGHT',
    };
    store.dispatch(action);
    // state.direction = '90deg';
    // renderGradient();
    // renderColors();
  });
