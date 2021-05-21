/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

const NbColors = () => {
  const nbColors = useSelector((state) => state.nbColors);
  // Pour pouvoir lire les informations du state, react-redux nous met à disposition le hook useSelector.
  // Il faut lui passer un callback qui prend en paramètre le state et venir lister ce qu'on lit dans le state
  return (
    <div className="nbColors">{nbColors} couleur(s) générée(s)</div>
  );
};

export default NbColors;
