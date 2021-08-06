import React from 'react'
import './topbar.css';
import {NotificationsNone, Settings} from '@material-ui/icons';
import AvatarImage from '../images/avatar-svgrepo-com.svg'

const Topbar = () => {
    return (
        <div className="topbar" >
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        FinTricity
                    </span>
                    </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone  />
                        <span className="topIconBadge" >2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings  />
                        <span className="topIconBadge" >2</span>
                    </div>
                    <img src={AvatarImage} className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
