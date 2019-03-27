import React, { Component } from 'react';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';
import './PomodoroClock.css';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cycle: "Session",
      isTimerOn: false,
      sessionLgh: 25,
      breakLgh: 5,
      minutes: 25,
      seconds: 0,
      pausedAt: ""
    }
    this.resetTimer = this.resetTimer.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.controlTimer = this.controlTimer.bind(this);
    this.theTimer = this.theTimer.bind(this);
  }

  resetTimer() {
    console.log("in Reset")
    this.setState({
      cycle: "Session",
      isTimerOn: false,
      sessionLgh: 25,
      breakLgh: 5,
      minutes: 25,
      seconds: 0,
      pausedAt: ""
    });
    clearInterval(this.timer);
  }

  breakIncrement () {
    this.state.breakLgh < 60 && this.setState({
      breakLgh: this.state.breakLgh + 1
    });
  }

  breakDecrement () {
    this.state.breakLgh > 1 && this.setState({
      breakLgh: this.state.breakLgh - 1
    });
  }

  sessionIncrement () {
    this.state.sessionLgh < 60 && this.setState({
      sessionLgh: this.state.sessionLgh + 1
    });
  }

  sessionDecrement () {
    this.state.sessionLgh > 1 && this.setState({
      sessionLgh: this.state.sessionLgh - 1
    });
  }

  controlTimer () {
    console.log("clicked");
    this.setState({
      isTimerOn: !this.state.isTimerOn
    });
  }

  theTimer() {
    console.log("heyo");
    this.secondsRemaining = this.state.sessionLgh * 60;
    if (!this.state.isTimerOn) {
      console.log("Timer goes off")
      this.controlTimer();
      this.timer = setInterval(() => {
        this.secondsRemaining -= 1;
        let mins = Math.floor(this.secondsRemaining / 60), secs = this.secondsRemaining - (mins * 60);
        this.setState({
          minutes: mins,
          seconds: secs
        });
      }, 1000)
    } else {
      console.log("Timer turned off")
      this.controlTimer();
      clearInterval(this.timer);
    }

  }
  componentDidMount () {
    document.getElementById("start_stop").addEventListener("click", () => {
      this.theTimer();
    });
  }
  
  render() {
    // console.log("rendered");
    return (
      <div id="pomodoro-clock" className="pomodoro-clock container">
      <Break
        breakLgh={this.state.breakLgh}
        breakIncrement={this.breakIncrement}
        breakDecrement={this.breakDecrement} />
      <Session
        sessionLgh={this.state.sessionLgh}
        sessionIncrement={this.sessionIncrement}
        sessionDecrement={this.sessionDecrement} />
      <Timer
        minutes={this.state.minutes}
        seconds={this.state.seconds}
        resetTimer={this.resetTimer}
        cycle={this.state.cycle} />
      </div>
      );
    }
  }
  
  export default PomodoroClock;
  