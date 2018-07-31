import React from 'react'
import PropTypes from 'prop-types'

const Editor = ({ header, input, handleChange}) => {
  return (
    <div className = "Editor">
      <h3 className = "Editor__header">{header}</h3>
      <textarea className = "Editor__area" 
                value = {input}
                onChange={handleChange}>
                
      </textarea>
    </div>
  )
}

Editor.propTypes = {
  header: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Editor;
