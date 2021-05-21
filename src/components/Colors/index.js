import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Colors = () => {
  // Je récupère les infos du state (initialeState de index.js/reducers)
  // const theFirstColor = useSelector((state) => state.firstColor);
  // const theLastColor = useSelector((state) => state.lastColor);
  // const theDirection = useSelector((state) => state.direction);
  const { firstColor, lastColor, direction } = useSelector((state) => state);
  return (
    <div className="colors">
      <span style={{ color: `${firstColor}` }}>{firstColor}</span>
      <span style={{ transform: `rotate(${direction})` }}>↑</span>
      <span style={{ color: `${lastColor}` }}>{lastColor}</span>
    </div>
  );
};

export default Colors;
