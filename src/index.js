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
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // but de la journée
    // "Alexa/Store fais cette action"
    // store.fais(action);

    // debug
    console.log('Random all colors');
    // data
    state.nbColors += 2;
    state.firstColor = randomHexColor();
    state.lastColor = randomHexColor();
    // ui
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    state.nbColors += 1;
    state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    state.nbColors += 1;
    state.lastColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
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
    renderGradient();
    renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    state.direction = '90deg';
    renderGradient();
    renderColors();
  });
