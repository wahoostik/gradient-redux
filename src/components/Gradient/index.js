import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

const Gradient = ({ firstColorProps, lastColorProps }) => (
  <div
    className="gradient"
    style={{ background: `linear-gradient(45deg, ${firstColorProps},${lastColorProps})` }}
  />
);

Gradient.propTypes = {
  firstColorProps: PropTypes.string.isRequired,
  lastColorProps: PropTypes.string.isRequired,
};

export default Gradient;
