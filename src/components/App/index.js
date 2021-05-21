/* eslint-disable linebreak-style */
// == Import npm
import React from 'react';

// == Import
import NbColors from 'src/components/NbColors';
import RandomButtons from 'src/components/RandomButtons';
import Colors from 'src/components/Colors';
import Gradient from 'src/components/Gradient';
import DirectionButtons from 'src/components/DirectionButtons';
import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <h1>Gradient React-Redux</h1>
    <NbColors />
    <RandomButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

// == Export
export default App;
