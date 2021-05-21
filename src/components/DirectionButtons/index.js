import React from 'react';
import Button from './Button';

import './styles.scss';

const DirectionButtons = () => (
  <div className="buttons group">
    {/*
      sur un container, on peut rajouter des props.
      Autant qu'on veut et de tout type
    */}
    <Button text="to left" direction="270deg" />
    <Button text="45°" direction="45deg" />
    <Button text="135°" direction="135deg" />
    <Button text="225°" direction="225deg" />
    <Button text="315°" direction="315deg" />
    <Button text="to right" direction="90deg" />
  </div>
);

export default DirectionButtons;
