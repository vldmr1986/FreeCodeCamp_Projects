import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ src, id, handleClick, alt, type }) => {
  return (
    <button type = {type} className="Button btn btn-secondary" id={id} onClick={handleClick}>
      <img src={src} alt={alt}/>
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button'
}

export default Button;