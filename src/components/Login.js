import React from 'react';
import '../styles/App.scss';


class Login extends React.Component {
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
          <p className="title">COVID-19 Hospital Management System</p>
          <p className="subtitle">By Team15: Brittany Critchfield, Steven Karson, Sam Schiff, Eric Zhang</p>
        </div>
        <div className="login-div">
          <input placeholder="Username" />
          <input placeholder="Password" />
          <form action="/dashboard"><button type="submit">Login</button></form>
        </div>
      </div>
    );
  }
}

export default Login;
