import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {secondsToMinutes} from '../secondsToMinutes.js';

export default class Timer extends Component {
  render(){
    const {seconds, heading, id} = this.props;
    const time = secondsToMinutes(seconds);
    const timeStr = `${time.m}:${time.s}`;

    return (
      <div className="bg-dark text-white" id={id} >
        <h1>{heading}</h1>
        <h2>{timeStr}</h2>
      </div>
    );
  }

}


Timer.propTypes = {
  heading: PropTypes.string.isRequired,
  seconds: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

Timer.defaultProps = {
    seconds: 1500
}