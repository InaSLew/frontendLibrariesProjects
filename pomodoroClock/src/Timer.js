import React from 'react';

const Timer = (props) => {
    return (
        <div className="timer">
            <label id="timer-label" htmlFor="time-left">{props.cycle}</label>
            <div id="time-left">
                {(props.minutes ? (props.minutes < 10 ? `0${props.minutes}` : `${props.minutes}`) : "00")}:{(props.seconds ? (props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`) : "00")}
            </div>
            <button id="start_stop" className="start-stop btn btn-primary" onClick={props.controlTimer}>
                <i className="fas fa-play"></i><i className="fas fa-pause" hidden></i>
            </button>
            <button id="reset" className="reset btn btn-info" onClick={props.resetTimer}><i className="fas fa-sync"></i></button>
      </div>
    )
}

export default Timer;