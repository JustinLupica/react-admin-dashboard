import React from 'react'
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topleft">
                    <span className="logo">Admin Dashboard</span>
                </div>
                <div className="topright">
                    <div className="topbar-icon-container">
                        <NotificationsNone />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Language />
                        <span className="top-icon-badge">2</span>
                    </div>
                    <div className="topbar-icon-container">
                        <Settings />
                    </div>
                    <img src="https://posterspy.com/wp-content/uploads/2019/04/Iron-Man-Endgame-Portrait-1500x1000.jpg" alt="" className="avatar" />
                </div>
            </div>
        </div>
    )
}
