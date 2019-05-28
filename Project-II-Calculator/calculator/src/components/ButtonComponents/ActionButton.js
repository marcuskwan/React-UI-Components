import React from 'react';
import './Button.css';

function ActionButton (props) {
    return (
        <div className="action-button">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
    )
}

export default ActionButton;