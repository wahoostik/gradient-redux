/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { randomizeFirstColor, randomizeLastColor } from 'src/actions';
// import { randomHexColor } from 'src/utils';
import PropTypes from 'prop-types';
import './styles.scss';

const RandomButtons = ({ onClickRandomFirstButton, onClickRandomLastButton }) =>
  // useDispatch nous met à disposition la fonction dispatch du store = store.disptach
  // const dispatch = useDispatch();
  (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={onClickRandomFirstButton}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={() => {
          onClickRandomFirstButton();
          onClickRandomLastButton();
        }}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={onClickRandomLastButton}
      >
        Random Last
      </button>
    </div>
  );
RandomButtons.propTypes = {
  onClickRandomFirstButton: PropTypes.func.isRequired,
  onClickRandomLastButton: PropTypes.func.isRequired,
};

export default RandomButtons;
