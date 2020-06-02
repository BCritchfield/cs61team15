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
        <div style={{
          display: 'flex', lineHeight: '0', justifyContent: 'space-between', margin: '5px', fontWeight: '700',
        }}
        >
          <p>{this.props.hospital.WardName} Patients</p>
          <button type="submit" onClick={this.props.onRequestClose}>x</button>
        </div>
        <div className="doctor-info">
          <span />
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

      </ReactModal>
    );
  }
}


export default withRouter(connect(null, { createPatientAction, deletePatientAction })(BuildingModal));
