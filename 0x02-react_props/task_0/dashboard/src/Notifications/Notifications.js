import PropTypes from 'prop-types';
import React from 'react';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import icon from './close.jpg';
function Notifications({ displayDrawer }) {
    const mystyle = {
        position: "absolute",
        backgroundColor: "white",
        border: "none",
        top: '5px',
        right: '5px'
    }
    const menu = {
        position: "absolute",
        top: "5px",
        right: "15em",
        color: "black"
    }
    function click() {
        console.log(`Close button has been clicked`)
    }
    return (
        <>
        <div className="menuItem" style={menu}>Your notifications</div>
        { displayDrawer ? (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button aria-label='Close' style={mystyle} onClick={click}>
                <img src={icon} alt="" className='close' />
            </button>
            <ul>
                <NotificationItem type="default" value="New course available"/>
                <NotificationItem type="urgent" value="New resume available"/>
                <NotificationItem type="" html={{__html:getLatestNotification()}}/>
            </ul>
        </div>) : (<></>)}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}

export default Notifications;