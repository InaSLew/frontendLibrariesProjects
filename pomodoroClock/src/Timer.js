import React from 'react';

const Timer = (props) => {
    return (
        <div className="timer">
            <label id="timer-label" htmlFor="time-left" className="h2">{props.cycle}</label>
            <div id="time-left" className="h1">
                {(props.minutes ? (props.minutes < 10 ? `0${props.minutes}` : `${props.minutes}`) : "00")}:{(props.seconds ? (props.seconds < 10 ? `0${props.seconds}` : `${props.seconds}`) : "00")}
            </div>
            <button
                id="start_stop"
                className="start-stop btn btn-link"
                aria-label="Play and pause the clock"
                onClick={props.controlTimer}>
                <span className="mobile-btns">
                    <i className="fas fa-play fa-2x"></i><i className="fas fa-pause fa-2x"></i>
                </span>
            </button>
            <button
                id="reset"
                className="reset btn btn-link"
                aria-label="Reset the clock to default state"
                onClick={props.resetTimer}>
                <span className="mobile-btns">
                    <i className="fas fa-sync fa-3x"></i>
                </span>
            </button>
      </div>
    )
}

export default Timer;