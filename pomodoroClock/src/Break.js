import React from 'react';

const Break = (props) => {
    return (
        <div className="break">
            <label id="break-label" htmlFor="break-length" className="h3">Break Length</label>
            <div id="break-length" className="h4">{props.breakLgh}</div>
            <button
                id="break-increment"
                className="break-plus btn"
                aria-label="Increment Break time by one minute"
                onClick={props.breakIncrement}>
                <span className="mobile-btns">
                    <i className="fas fa-plus fa-lg"></i>
                </span>
            </button>
            <button
                id="break-decrement"
                className="break-minus btn"
                aria-label="Decrement Break time by one minute"
                onClick={props.breakDecrement}>
                <span className="mobile-btns">
                    <i className="fas fa-minus fa-lg"></i>
                </span>
            </button>
        </div>
        );
}
    
export default Break;