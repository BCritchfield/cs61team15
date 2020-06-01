import React from 'react';
import '../styles/Doctors.scss';
import PatientModal from './PatientModal';


class WaitingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentPatient: null,
    };
  }

  render() {
    console.log('Waiting List state');
    console.log(this.state);
    return (
      <div className="waiting">
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
