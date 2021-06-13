import "./user.css"
import {CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="user-add-button">Create</button>
                </Link>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT4WfGgvz-5-6OccA4024I3SFT_WqTK_2QFp738xTv6MRviaXHjS8j3-Lf29ivQ" alt="" className="user-show-img" />
                        <div className="user-show-top-title">
                            <span className="user-show-username">Joe Burrow</span>
                            <span className="user-show-user-title">Bengals QB</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <span className="user-show-title">Account Details</span>
                        <div className="user-show-info">
                        <PermIdentity className="user-show-icon"/>
                        <span className="user-show-info-title">joey_b</span>
                        </div>
                        <div className="user-show-info">
                        <CalendarToday className="user-show-icon"/>
                        <span className="user-show-info-title">06-26-1986</span>
                        </div>
                        <span className="user-show-title">Contact Details</span>
                        <div className="user-show-info">
                        <PhoneAndroid className="user-show-icon"/>
                        <span className="user-show-info-title">(123)555-5555</span>
                        </div>
                        <div className="user-show-info">
                        <MailOutline className="user-show-icon"/>
                        <span className="user-show-info-title">joey_b@bengals.com</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <span className="user-update-title">Edit</span>
                    <form className="user-update-form">
                        <div className="user-update-left">
                            <div className="user-update-item">
                                <label>Username</label>
                                <input type="text" placeholder="joey_b" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label>Full Name</label>
                                <input type="text" placeholder="Joe Burrow" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label>Email</label>
                                <input type="text" placeholder="joey_b@bengals.com" className="user-update-input"/>
                            </div>
                            <div className="user-update-item">
                                <label>Phone Number</label>
                                <input type="text" placeholder="(123)555-5555" className="user-update-input"/>
                            </div>
                        </div>
                        <div className="user-update-right">
                            <div className="user-update-upload">
                                <img className="user-update-img" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT4WfGgvz-5-6OccA4024I3SFT_WqTK_2QFp738xTv6MRviaXHjS8j3-Lf29ivQ" alt="Joe Burrow Smiling" />
                                <label htmlFor="file"><Publish className="user-update-icon"/></label>
                                <input type="file" id="file" style={{ display: "none" }}/>
                            </div>
                            <button className="user-update-button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

