import React from 'react';

const Session = (props) => {
    return (
        <div className="session">
            <label id="session-label" htmlFor="session-length">Session Length</label>
            <div id="session-length">{props.sessionLgh}</div>
            <button id="session-increment" className="session-plus btn btn-secondary" onClick={props.sessionIncrement}>
                <i className="fas fa-plus"></i>
            </button>
            <button id="session-decrement" className="session-minus btn btn-secondary" onClick={props.sessionDecrement}>
                <i className="fas fa-minus"></i>
            </button>
        </div>
    )
}

export default Session;