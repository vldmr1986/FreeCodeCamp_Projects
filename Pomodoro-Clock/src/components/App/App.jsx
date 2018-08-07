import React, { Component } from 'react';
import './App.css';
import Timer from "../Timer/Timer";
import Button from "../Button/Button";
import Settings from '../Settings/Settings'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.timerID = 0;
  }

  get initialState () {
    return {
      breakTime: 5,
      sessionTime: 25,
      session: true,
      seconds: 1500,
      active: false
    };
  }
  
  _countDown = () => {
   if (this.state.seconds === 0) {
      clearInterval(this.timerID);
      this.setState(prevState => ({
        session: !prevState.session,
      }))
      this._setTimer();
        
      let audio = new Audio();
      audio.src = 'http://www.funmag.org/wp-content/uploads/2013/11/08-alarm-ringtones.mp3';
      audio.play();
      }
    const seconds = this.state.seconds - 1;
    this.setState({
      seconds,
      active: true
    })
  }

  _startPauseTimer = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));

    if (!this.state.active) {
      this.timer = setInterval(this._countDown, 1000);
    } else {
      clearInterval(this.timer);
    }
  }

  _setBreak = (min) => {
    this.setState({ 
      breakTime: min,
    }) 
  }

  _setSession = (min) => {
       this.setState({
      sessionTime: min,
      seconds: min * 60  
    });
  }

  _setTimer = () => {
    this.state.session 
    ? this.setState({
        seconds: this.state.sessionTime * 60,
        session: true
    })
    : this.setState({
      seconds: this.state.breakTime * 60,
      session: false
    });
  }

  _resetAll = (e) => {
    e.preventDefault();
    this.setState(this.initialState);
  }

  render(){
    const {session, seconds} = this.state;
    return (
      <div className="App container">
        <div className='Settings--wrap'>
        <Settings time = {this.state.breakTime} 
          setTimer = {this._setBreak} 
          heading = 'Break time' 
          id='Break--settings' 
          timeID = 'Break--time' 
        />
        <Settings 
          time = {this.state.sessionTime} 
          setTimer={this._setSession} 
          heading = 'Session time' 
          id='Session--settings' 
          timeID='Session--time' 
        />
        </div>
        <Timer
          heading={session ? 'Session' : 'Break'}
          seconds={seconds}
          id="time-left"
        />
        <div className='Action'>
          <Button src={this.state.active ? "https://png.icons8.com/windows/35/ffffff/pause.png" : "https://png.icons8.com/windows/35/ffffff/play.png"} 
            id="start_stop" 
            alt={this.state.active ? 'Pause button' : 'Play button'} 
            handleClick={(e) => {
              e.preventDefault();
              this._startPauseTimer();
            } }
          />
          <Button
            src="https://png.icons8.com/windows/35/ffffff/synchronize.png"
            id="reset" alt = 'Reset button' handleClick={this._resetAll}
          />
        </div>
      </div>
    );
  }
}


export default App;
