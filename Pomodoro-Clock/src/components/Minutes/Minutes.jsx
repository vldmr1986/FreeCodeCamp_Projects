import React from 'react';
import PropTypes from 'prop-types';

const Minutes = ({ minutes }) => {
  return (
    <div className="Minutes btn btn-dark" >
      {minutes}
    </div>
  );
};

Minutes.propTypes = {
  minutes: PropTypes.number.isRequired,
};

export default Minutes;