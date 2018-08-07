import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ src, id, handleClick, alt }) => {
  return (
    <div className="Button btn btn-secondary" id={id} onClick={handleClick}>
      <img src={src} alt={alt}/>
    </div>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Button;