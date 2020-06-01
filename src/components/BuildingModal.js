import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';
import PatientModal from './PatientModal';
import { createPatientAction, deletePatientAction } from '../actions';

import 'react-dropdown/style.css';
import '../styles/Doctors.scss';


class BuildingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentPatient: null,
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
    if (!this.props.hospital) {
      return <div />;
    }

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
        <PatientModal
          open={this.state.open}
          onDelete={() => { this.props.deletePatientAction(this.state.currentPatient.PersonID); this.setState({ open: false, currentPatient: null }); }}
          onRequestClose={() => { this.setState({ open: false }); }}
          patient={this.state.currentPatient}
        />
        <div className="doctor-info">
          <div style={{ display: 'flex', lineHeight: '0', justifyContent: 'space-between' }}>
            <p>{this.props.hospital.WardName}</p>
            <button type="submit" onClick={this.props.onRequestClose}>x</button>
          </div>

          {this.props.patients.filter((patient) => { return patient.WardID === this.props.hospital.WardID; }).map((patient) => {
            return (
              <div key={patient.PersonID}
                role="button"
                tabIndex="0"
                onClick={() => { this.setState({ currentPatient: patient, open: true }); }}
                className="patient"
              >
                {patient.FirstName} {patient.LastName}
              </div>
            );
          })}
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
              textAlign: 'center', display: 'flex', flexDirection: ' column', justifyContent: 'center', alignItems: 'center',
            }}
          >
            <p style={{ color: 'black' }}>Check if patient shows symptoms of or has been exposed to COVID-19</p>
            <input
              name="covid"
              type="checkbox"
              checked={this.state.covid}
              onChange={() => { const current = this.state.covid; this.setState({ covid: !current }); }}
              style={{ marginBottom: '10px' }}
            />
          </label>

          <div
            role="button"
            tabIndex="0"
            className="change-section"
            onClick={() => {
              const covid = this.state.covid ? 1 : 0;
              this.props.createPatientAction(this.state.firstName, this.state.lastName, this.state.age, covid);
              this.setState({
                firstName: '', lastName: '', age: '', covid: false,
              });
            }}
          >
            <p>Check-In New Patient</p>
          </div>

        </div>

      </ReactModal>
    );
  }
}


export default withRouter(connect(null, { createPatientAction, deletePatientAction })(BuildingModal));
