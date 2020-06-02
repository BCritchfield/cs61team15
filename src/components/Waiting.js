import React from 'react';
import '../styles/Doctors.scss';
import PatientModal from './PatientModal';
import NewPatientModal from './NewPatientModal';


class WaitingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentPatient: null,
      newPatientOpen: false,
    };
  }

  render() {
    return (
      <div className="waiting">
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: '0px', padding: '0px 20px',
        }}
        >
          <p style={{
            padding: '0px', margin: '0px', color: '#000', fontWeight: '600',
          }}
          >Name
          </p>
          <div
            className="add-new-patient"
            role="button"
            tabIndex="0"
            onClick={() => { this.setState({ newPatientOpen: true }); }}

          >Add New Patient<i style={{ paddingLeft: '5px' }} className="fas fa-plus-circle" />
          </div>
        </div>

        <NewPatientModal open={this.state.newPatientOpen} close={() => { this.setState({ newPatientOpen: false }); }} />
        {this.state.currentPatient
          ? (
            <PatientModal
              open={this.state.open}
              onDelete={() => { this.props.deletePatientAction(this.state.currentPatient.PersonID); this.setState({ open: false, currentPatient: null }); }}
              onRequestClose={() => { this.setState({ open: false }); }}
              patient={this.state.currentPatient}
            />
          )
          : ''}
        {
          this.props.patients.map((patient) => {
            return (
              <div
                role="button"
                tabIndex="0"
                onClick={() => { this.setState({ currentPatient: patient, open: true }); }}
                className="doctor"
                style={{ color: 'black' }}
              >{patient.FirstName} {patient.LastName}
              </div>
            );
          })
        }
      </div>
    );
  }
}


export default WaitingList;
