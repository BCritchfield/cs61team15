import React from 'react';
import '../style.scss';


const Sidebar = (props) => {
  const testData = {
    firstName: 'John',
    lastName: 'Doe',
  };
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
          <p>American Fork Community Hospital</p>
        </div>
      </div>
      <div>
        <div className="time-date">
          <p>5/12/2020</p>
          <p>4:55pm</p>
        </div>
        <div>
          <button className="sign-out-button" type="submit">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
