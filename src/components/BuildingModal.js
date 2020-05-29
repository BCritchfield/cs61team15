import React from 'react';
import ReactModal from 'react-modal';
import PatientModal from './PatientModal';

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

  render() {
    return (
      <ReactModal
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
        <PatientModal open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }} patient={this.state.currentPatient} />
        <div className="doctor-info">
          <div style={{ display: 'flex', lineHeight: '0', justifyContent: 'space-between' }}>
            <p>{this.props.hospital}</p>
            <button type="submit" onClick={this.props.onRequestClose}>x</button>
          </div>

          {this.props.patients.map((patient) => {
            return (
              <div role="button" tabIndex="0" onClick={() => { this.setState({ currentPatient: patient, open: true }); }} className="patient">{patient}</div>);
          })}
        </div>
        <div className="doctor-actions"
          style={{
            justifyContent: 'center', alignItems: 'center', marginTop: '10px', flexDirection: 'column',
          }}
        >
          <input style={{
            textAlign: 'center', width: '50%', margin: '10px', fontSize: '15px', border: 'none', borderBottom: '1px solid grey',
          }}
            placeholder="Enter new patient name"
          />

          <div className="change-section">
            <p>Check-In New Patient</p>
          </div>

        </div>

      </ReactModal>
    );
  }
}

export default BuildingModal;
