import React from 'react';
import DoctorModal from './DoctorModal';
import '../styles/Doctors.scss';


class Doctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      open: false,
      selectedDoctor: null,
    };
  }

  render() {
    return (
      <div className="doctors">
        <DoctorModal doctor={this.state.selectedDoctor} onRequestClose={() => { this.setState({ open: false }); }} open={this.state.open} />
        <div className="doctors-header"><div>Name</div><div>Specialty Codes</div></div>
        {this.props.doctors.map((doctor) => (
          <div key={doctor} role="button" tabIndex="0" onClick={() => { this.setState({ selectedDoctor: doctor, open: true }); }} className="doctor">
            <div>{doctor.FirstName} {doctor.LastName}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Doctors;
