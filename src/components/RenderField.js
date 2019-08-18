import React from 'react';
import PropTypes from 'prop-types';

const RenderField = props => (
  <div>
    <label>{props.placeholder}</label>
    <div>
      <input {...props}/>
      {props.touched && props.error && <span>{props.error}</span>}
    </div>
  </div>
);

RenderField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string
};

export default RenderField;
