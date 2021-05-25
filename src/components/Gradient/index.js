import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

const Gradient = ({ firstColorProps, directionProps, lastColorProps }) => (
  <div
    className="gradient"
    style={{ background: `linear-gradient(${directionProps}, ${firstColorProps},${lastColorProps})` }}
  />
);

Gradient.propTypes = {
  firstColorProps: PropTypes.string.isRequired,
  lastColorProps: PropTypes.string.isRequired,
  directionProps: PropTypes.string.isRequired,
};

export default Gradient;
