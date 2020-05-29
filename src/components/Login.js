import React from 'react';
import '../styles/App.scss';


class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 1,
      open: false,
      selectedDoctor: null,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="login-page">
        <div className="header">
          <p>COVID-19 Hospital Management System</p>
          <p>By Team15: Brittany Critchfield, Steven Karson, Sam Schiff, Eric Zhang</p>
        </div>
        <div className="login-div">
          <input placeholder="Username" />
          <input placeholder="Password" />
        </div>
      </div>
    );
  }
}

export default Doctors;
