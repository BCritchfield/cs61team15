import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import { createPatientAction } from '../actions';

import 'react-dropdown/style.css';
import '../styles/Doctors.scss';


class NewPatientModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstName: '',
      lastName: '',
      age: '',
      covid: false,
    };
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    console.log(this.state);
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.open}
        shouldCloseOnOverlayClick
        style={
          {
            content: {
              position: 'fixed',
              left: 'calc(50vw - 200px)',
              height: '400px',
              overflow: 'scroll',
              width: '400px',
              padding: '10px',
              paddingTop: '20px',
              borderRadius: '10px',
              border: '1px solid lightgrey',


              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

              flexDirection: 'column',
            },
          }
        }
      >

        <div style={{ marginTop: '0px' }}>
          <div style={{
            marginTop: '0px', fontWeight: '700', display: 'flex', justifyContent: 'space-between',
          }}
          >
            <p style={{ margin: '0px', padding: '0px' }}>Check-In a New Patient</p>
            <div role="button" tabIndex="0" onClick={this.props.close} style={{ cursor: 'pointer', margin: '0px', paddingRight: '5px' }}>x</div>
          </div>
          <p>New patient will be added to waiting list</p>
        </div>

        <div className="doctor-actions"
          style={{
            justifyContent: 'center', alignItems: 'center', marginTop: '10px', flexDirection: 'column',
          }}
        >
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            style={{
              textAlign: 'center', width: '50%', margin: '10px', fontSize: '15px', border: 'none', borderBottom: '1px solid grey',
            }}
            placeholder="Enter new patient first name"
          />

          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            style={{
              textAlign: 'center', width: '50%', margin: '10px', fontSize: '15px', border: 'none', borderBottom: '1px solid grey',
            }}
            placeholder="Enter new patient last name"
          />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            style={{
              textAlign: 'center', width: '50%', margin: '10px', fontSize: '15px', border: 'none', borderBottom: '1px solid grey',
            }}
            placeholder="Enter new patient age"
          />

          <label htmlFor="covid"
            style={{
              textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
            }}
          >
            <p style={{ color: 'black' }}>COVID-19 Exposure/Symptoms</p>
            <input
              name="covid"
              type="checkbox"
              checked={this.state.covid}
              onChange={() => { const current = this.state.covid; this.setState({ covid: !current }); }}
              style={{ marginBottom: '10px', margin: '20px' }}
            />
          </label>

          <div
            role="button"
            tabIndex="0"
            className="change-section"
            onClick={() => {
              const covid = this.state.covid ? 1 : 0;
              this.props.createPatientAction(this.state.firstName, this.state.lastName, this.state.age, (covid ? '1' : '0'));
              this.setState({
                firstName: '', lastName: '', age: '', covid: false,
              });
              this.props.close();
            }}
          >
            <p>Check-In New Patient</p>
          </div>

        </div>

      </ReactModal>
    );
  }
}


export default withRouter(connect(null, { createPatientAction })(NewPatientModal));
