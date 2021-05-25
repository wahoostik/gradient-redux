import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClickDirectionButtons }) => (
  <button
    type="button"
    className="button"
    id="randFirst"
    onClick={onClickDirectionButtons}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDirectionButtons: PropTypes.func.isRequired,
};

export default Button;
