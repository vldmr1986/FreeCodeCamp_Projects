import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Minutes from '../Minutes/Minutes';
import Button from '../Button/Button'; 

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: props.time
    }
  }

  _increment = () => {
    let min = this.state.minutes + 1;
    if (min < 60) {
      this.setState(prevState => ({ minutes: min }));
    } else if ((min = 60)) {
      this.setState({ minutes: 60 });
    }
    // console.log(min);
    this.props.setTimer(min);
  }

  _decrement = () => {
    let min = this.state.minutes - 1;
    if (min >= 0) {
      this.setState(prevState => ({
        minutes: min
      }));
    } else if ((min = 0)) {
      this.setState({
        minutes: 0
      });
    }
    // console.log(min);
    this.props.setTimer(min);
  }


  render() {
    const { heading, id } = this.props;
    return (
      <div className="Settings" id={id}>
        <h2 className="Settings--header">{heading}</h2>
        <div className="Settings--container" >
          <Button src='https://png.icons8.com/material-outlined/24/ffffff/plus.png' handleClick={this._increment} alt = "plus" id = "increment"/>
          <Minutes minutes={this.state.minutes} />
          <Button src='https://png.icons8.com/small/24/ffffff/minus.png' handleClick={this._decrement} alt = "minus" id = "decrement"/>
        </div>
      </div>
    );
  }
};

Settings.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

