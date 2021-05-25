/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import './styles.scss';

const NbColors = ({ nbColorsProps }) =>
  // const nbColors = useSelector((state) => state.nbColors);
  // Pour pouvoir lire les informations du state, react-redux nous met à disposition le hook useSelector.
  // Il faut lui passer un callback qui prend en paramètre le state et venir lister ce qu'on lit dans le state
  (
    <div className="nbColors">{nbColorsProps} couleur(s) générée(s)</div>
  );

NbColors.propTypes = {
  nbColorsProps: PropTypes.number.isRequired,
};

export default NbColors;
