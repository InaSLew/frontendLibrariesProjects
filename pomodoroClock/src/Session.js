import React from 'react';

const Session = (props) => {
    return (
        <div className="session">
            <label id="session-label" htmlFor="session-length" className="h3">Session Length</label>
            <div id="session-length" className="h4">{props.sessionLgh}</div>
            <button
                id="session-increment"
                className="session-plus btn"
                aria-label="Increment Session time by one minute"
                onClick={props.sessionIncrement}>
                <span className="mobile-btns">
                    <i className="fas fa-plus fa-lg"></i>
                </span>
            </button>
            <button
                id="session-decrement"
                className="session-minus btn"
                aria-label="Decrement Session time by one minute"
                onClick={props.sessionDecrement}>
                <span className="mobile-btns">
                    <i className="fas fa-minus fa-lg"></i>
                </span>
                {/* <i className="fas fa-minus fa-lg"></i> */}
            </button>
        </div>
    )
}

export default Session;