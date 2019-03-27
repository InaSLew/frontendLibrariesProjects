import React from 'react';

const Break = (props) => {
    return (
        <div className="break">
            <label id="break-label" htmlFor="break-length">Break Length</label>
            <div id="break-length">{props.breakLgh}</div>
            <button id="break-increment" className="break-plus btn btn-secondary" onClick={props.breakIncrement}>
                <i className="fas fa-plus"></i>
            </button>
            <button id="break-decrement" className="break-minus btn btn-secondary" onClick={props.breakDecrement}>
                <i className="fas fa-minus"></i>
            </button>
        </div>
        );
}
    
export default Break;