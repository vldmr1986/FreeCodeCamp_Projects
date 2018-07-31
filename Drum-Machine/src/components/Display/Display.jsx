import React from 'react'

import audios from '../audioData'
import DrumPad from '../DrumPad/DrumPad'

import '../Display/Display.css';



export default class Display extends React.Component {
  state = {
    active: false,
    display: ''
  };

  showText = (audioID) => {
    this.setState({
      display: `${audioID}`
    });
    this.hideText();
  }

  hideText = () => {
    setTimeout(() => {
      this.setState({
        display: ''
      });
    }, 1500);
  }

  render() {
    const buttons = audios.map(sound => <DrumPad key={sound.id} cls='clip' {...sound} onClick={this.showText} />);
    return (
      <div className = 'Display'>
        <div className='Display__text'>{this.state.display}</div>
        <div className = 'DrumPads'>
        {buttons}
        </div>
      </div>
    )
  }
}
