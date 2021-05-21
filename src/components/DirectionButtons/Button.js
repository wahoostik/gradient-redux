import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button
    type="button"
    className="button"
    id="randFirst"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
