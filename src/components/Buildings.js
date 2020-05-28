import React from 'react';
import '../styles/Buildings.scss';
import BuildingModal from './BuildingModal';


class Buildings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      currentBuilding: null,
    };
  }


  render() {
    const hospitals = ['Smith Ward', 'Inpatient Building 3', 'ICU Ward #1', 'CNT Building', 'COVID Temporary Ward'];
    const patients = ['Patient 1', 'Patient 2', 'Patient 3', 'Patient 1', 'Patient 2', 'Patient 3', 'Patient 1', 'Patient 2', 'Patient 3', 'Patient 1', 'Patient 2', 'Patient 3'];
    return (
      <div className="buildings">
        <BuildingModal hospital={this.state.currentBuilding} onRequestClose={() => { this.setState({ modalOpen: false }); }} patients={patients} open={this.state.modalOpen} />
        {hospitals.map((hospital) => <div role="button" tabIndex="0" onClick={() => { this.setState({ modalOpen: true, currentBuilding: hospital }); }} className="building">{hospital}</div>)}
      </div>
    );
  }
}

export default Buildings;
