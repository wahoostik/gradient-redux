import React from 'react';
import { useDispatch } from 'react-redux';
import { randomizeFirstColor, randomizeLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';
import './styles.scss';

const RandomButtons = () => {
  // useDispatch nous met à disposition la fonction dispatch du store = store.disptach
  const dispatch = useDispatch();
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={() => {
          const firstColor = randomHexColor();
          const action = randomizeFirstColor(firstColor);
          dispatch(action);
        }}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          const firstColor = randomHexColor();
          const lastColor = randomHexColor();
          const actionFirst = randomizeFirstColor(firstColor);
          const actionLast = randomizeLastColor(lastColor);
          dispatch(actionFirst);
          dispatch(actionLast);
        }}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={() => {
          const lastColor = randomHexColor();
          const action = randomizeLastColor(lastColor);
          dispatch(action);
        }}
      >
        Random Last
      </button>
    </div>
  );
};

export default RandomButtons;
