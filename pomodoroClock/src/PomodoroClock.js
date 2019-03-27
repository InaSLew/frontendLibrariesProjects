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
      minutes: 0,
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
    this.beep.pause();
    this.beep.currentTime = 0;
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
    if (!this.state.isTimerOn) {
      this.state.breakLgh < 60 && this.setState({
        breakLgh: this.state.breakLgh + 1,
        pausedAt: ""
      });
    }
  }

  breakDecrement () {
    if (!this.state.isTimerOn) {
      this.state.breakLgh > 1 && this.setState({
        breakLgh: this.state.breakLgh - 1,
        pausedAt: ""
      });
    }
  }

  sessionIncrement () {
    if (!this.state.isTimerOn) {
      this.state.sessionLgh < 60 && this.setState({
        sessionLgh: this.state.sessionLgh + 1,
        pausedAt: ""
      });
    }
  }

  sessionDecrement () {
    if (!this.state.isTimerOn) {
      this.state.sessionLgh > 1 && this.setState({
        sessionLgh: this.state.sessionLgh - 1,
        pausedAt: ""
      });
    }
  }

  controlTimer () {
    this.setState({
      isTimerOn: !this.state.isTimerOn
    });
  }

  theTimer() {
    this.secondsRemaining = (this.state.pausedAt === "" ? (this.state.cycle === "Session" ? this.state.sessionLgh * 60 : this.state.breakLgh * 60) : this.state.pausedAt)
    if (!this.state.isTimerOn) {
      this.controlTimer();
      this.setState({
        minutes: this.state.cycle === "Session" ? this.state.sessionLgh : this.state.breakLgh,
        seconds: 0
      });
      this.timer = setInterval(() => {
        this.secondsRemaining -= 1;
        if (this.secondsRemaining < 0) {
          this.setState({
            cycle: this.state.cycle === "Session" ? "Break" : "Session",
            pausedAt: ""
          });
          this.secondsRemaining = (this.state.cycle === "Session" ? this.state.sessionLgh : this.state.breakLgh) * 60
        }
        if (!this.secondsRemaining) {
          this.beep.play();
        }
        let mins = Math.floor(this.secondsRemaining / 60), secs = this.secondsRemaining - (mins * 60);
        this.setState({
          minutes: mins,
          seconds: secs,
          pausedAt: this.secondsRemaining
        });
      }, 1000)
    } else {
      this.controlTimer();
      clearInterval(this.timer);
    }
  }

  componentDidMount () {
    this.setState({
      minutes: this.state.sessionLgh,
      seconds: 0
    });
    document.getElementById("start_stop").addEventListener("click", () => {
      this.theTimer();
    });
    this.beep = document.getElementById("beep");
  }
  
  render() {
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
        <audio id="beep" src="https://onlineclock.net/audio/options/default.mp3">
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
      );
    }
  }
  
export default PomodoroClock;  