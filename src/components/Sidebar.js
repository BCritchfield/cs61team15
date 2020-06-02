import React from 'react';
import '../style.scss';


const Sidebar = (props) => {
  const testData = {
    firstName: 'Brittany',
    lastName: 'Doe',
  };

  const d = new Date();
  const hours = d.getHours() < 12 ? (d.getHours()) : (d.getHours() - 12);
  const amPm = d.getHours() < 12 ? 'AM' : 'PM';

  return (
    <div className="sidebar">
      <div>
        <div className="profile-picture" />
        <div><p className="hello">Hello, {testData.firstName}!</p></div>
        <div className="text-box">
          <p>Your Role:</p>
          <p>Admin</p>
        </div>
        <div className="text-box">
          <p>Your Hospital:</p>
          <p>Dartmouth Hitchcock Medical Center</p>
        </div>
      </div>
      <div>
        <div className="time-date">
          <p>{d.getMonth()}/{d.getDate()}/{d.getFullYear()}</p>
          <p>{hours}:{d.getMinutes()}{amPm}</p>
        </div>
        <div>
          <form action="/"><button className="sign-out-button" type="submit">Sign Out</button></form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
