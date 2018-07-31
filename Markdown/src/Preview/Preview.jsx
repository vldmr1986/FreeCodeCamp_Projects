import React from 'react'
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

const Preview = ({header, text}) => {
  return <div className="Preview">
      <h3 className="Preview__header">{header}</h3>
      <Markdown source = {text} className="Preview__window" />
    </div>;
}

Preview.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}


export default Preview;