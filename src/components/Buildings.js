import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../styles/Buildings.scss';
import BuildingModal from './BuildingModal';
import { getPatientsAction } from '../actions';


class Buildings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      currentBuilding: null,
    };
  }

  onComponentDidMount() {
    this.props.getPatients();
  }

  render() {
    if (!this.props.wards) {
      return <div />;
    }
    return (
      <div className="buildings">
        <BuildingModal hospital={this.state.currentBuilding} onRequestClose={() => { this.setState({ modalOpen: false }); }} patients={this.props.patients} open={this.state.modalOpen} />
        {
          this.props.wards.map(
            (ward) => <div key={ward.WardName} role="button" tabIndex="0" onClick={() => { this.setState({ modalOpen: true, currentBuilding: ward }); }} className="building">{ward.WardName}</div>,
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    patients: state.people.patients,

  }
);

export default withRouter(connect(mapStateToProps, { getPatientsAction })(Buildings));
