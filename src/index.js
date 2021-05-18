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
    state.direction = '270deg';
    renderGradient();
    renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    state.direction = '90deg';
    renderGradient();
    renderColors();
  });
