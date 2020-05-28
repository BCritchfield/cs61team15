import React from 'react';
import DoctorModal from './DoctorModal';
import '../styles/Doctors.scss';


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
    const doctors = ['J. Anderson', 'E. Demers', 'B. Davis', 'A. Rockefeller'];
    return (
      <div className="doctors">
        <DoctorModal doctor={this.state.selectedDoctor} onRequestClose={() => { this.setState({ open: false }); }} open={this.state.open} />
        <div className="doctors-header"><div>Name</div><div>Specialty Codes</div></div>
        {doctors.map((doctor) => (
          <div role="button" tabIndex="0" onClick={() => { this.setState({ selectedDoctor: doctor, open: true }); }} className="doctor">
            <div>{doctor}</div><div>4, 2, 10</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Doctors;
