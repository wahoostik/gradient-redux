/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';

const Colors = ({ firstColorProps, lastColorProps, directionProps }) =>
  // Je récupère les infos du state (initialeState de index.js/reducers)
  // const theFirstColor = useSelector((state) => state.firstColor);
  // const theLastColor = useSelector((state) => state.lastColor);
  // const theDirection = useSelector((state) => state.direction);
  // const { firstColor, lastColor, direction } = useSelector((state) => state);
  (
    <div className="colors">
      <span style={{ color: `${firstColorProps}` }}>{firstColorProps}</span>
      <span style={{ transform: `rotate(${directionProps})` }}>↑</span>
      <span style={{ color: `${lastColorProps}` }}>{lastColorProps}</span>
    </div>
  );
Colors.propTypes = {
  firstColorProps: PropTypes.string.isRequired,
  lastColorProps: PropTypes.string.isRequired,
  directionProps: PropTypes.string.isRequired,
};

export default Colors;
