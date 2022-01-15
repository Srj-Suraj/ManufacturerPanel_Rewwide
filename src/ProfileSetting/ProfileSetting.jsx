import React from "react";

// css import
import "./profileSetting.css";

// import component
import EditProfile from "./EditProfile";
import NotificationSetting from "./NotificationSetting";
import ChangePassword from "./ChangePassword";

function ProfileSetting() {
  return (
    <>
      <div className="container">
        {/* tab  */}
        <ul className="nav nav-tabs md-tabs mr-0 " id="myTabMD" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab-md"
              data-toggle="tab"
              href="#home-md"
              role="tab"
              aria-controls="home-md"
              aria-selected="true"
            >
              Edit Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab-md"
              data-toggle="tab"
              href="#profile-md"
              role="tab"
              aria-controls="profile-md"
              aria-selected="false"
            >
              Change Password
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab-md"
              data-toggle="tab"
              href="#contact-md"
              role="tab"
              aria-controls="contact-md"
              aria-selected="false"
            >
              Notification
            </a>
          </li>
        </ul>
        <div className="tab-content card pt-5 pb-5 mb-5" id="myTabContentMD">
          {/* first tab */}
          <div
            className="tab-pane fade show active "
            id="home-md"
            role="tabpanel"
            aria-labelledby="home-tab-md"
          >
            <EditProfile />
          </div>
          {/* second tab */}
          <div
            className="tab-pane fade p-5 "
            id="profile-md"
            role="tabpanel"
            aria-labelledby="profile-tab-md"
          >
            <ChangePassword />
          </div>
          {/* third tab */}
          <div
            className="tab-pane fade"
            id="contact-md"
            role="tabpanel"
            aria-labelledby="contact-tab-md"
          >
            <NotificationSetting />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSetting;
