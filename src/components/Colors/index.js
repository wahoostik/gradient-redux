import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Colors = () => {
  // Je récupère les infos du state (initialeState de index.js/reducers)
  const theFirstColor = useSelector((state) => state.firstColor);
  const theLastColor = useSelector((state) => state.lastColor);
  const theDirection = useSelector((state) => state.direction);
  // const { theFirstColor, theLastColor, theDirection } = useSelector((state) => state);
  return (
    <div className="colors">
      <span style={{ color: `${theFirstColor}` }}>{theFirstColor}</span>
      <span style={{ transform: `rotate(${theDirection})` }}>↑</span>
      <span style={{ color: `${theLastColor}` }}>{theLastColor}</span>
    </div>
  );
};

export default Colors;
