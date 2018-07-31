import React from 'react'
import PropTypes from 'prop-types'

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.audio);
    this.audio.play();
    this.audio.currentTime = 0;
    let text = this.audio.id.split('_').join(' ');
    this.props.onClick(text);
  }
  render(){
    const { id, text, src } = this.props;
  
  return (  
  <div className = "DrumPad" onClick = {this.handleClick} id = {id}>
  <h2>{text}</h2>
      <audio
        src={src}
        className={text}
        id={id} ref = {audio => this.audio = audio } />
  </div>
  )
}
}

DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default DrumPad
