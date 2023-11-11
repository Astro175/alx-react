import React from 'react';
import './Notifications.css';
import icon from './close.jpg';
import { getLatestNotification } from './utils';
function Notifications() {
    const mystyle = {
        position: "absolute",
        backgroundColor: "white",
        border: "none",
        top: '5px',
        right: '5px'
    }
    function click() {
        console.log(`Close button has been clicked`)
    }
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button aria-label='Close' style={mystyle} onClick={click}>
                <img src={icon} alt="" className='close' />
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={getLatestNotification()}/>
            </ul>
        </div>
    );
}

export default Notifications;