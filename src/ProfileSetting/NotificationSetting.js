import React from 'react';

// import css
import './notificationSetting.css'

function NotificationSetting(){
    return(
        <>
        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-tag"  />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Mentions</h5>
                <p>You will receive an alert when someone was mentioned you in any post.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>
        
        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-user-plus" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Follows</h5>
                <p>You will receive an alert when someone is follwing you.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-commenting" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Comments</h5>
                <p>You will receive an notifications when someone is comment on your post.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-envelope" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Email Notifications</h5>
                <p>You will receive daily email notifications.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-shopping-bag" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">New product</h5>
                <p>You will receive an notifications when a new product arrived.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-users" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Groups Invitation</h5>
                <p>You will receive an notifications when a group is inviting you.</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>

        <div className="   notiContainer">
            <div className="icon">
                <i className="fa fa-tasks" />
            </div>
            <div className="notDsc">
                <h5 className="notiTitle">Tasks</h5>
                <p>You will receive an notifications someone assign you a task</p>
            </div>
            <div className="togs ">
                <label className="switch">
                <input type="checkbox"  />
                <span className="slider round"></span>
                </label>
            </div>
        </div>
        
        
        
        
        
        </>
    );
}

export default NotificationSetting  ;