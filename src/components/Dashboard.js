import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Buildings from './Buildings';
import Doctors from './Doctors';
import Waiting from './Waiting';
import Stats from './Stats';
import { getPatientsAction, getDoctorsAction, getWardsAction } from '../actions';
import '../style.scss';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getPatientsAction();
    this.props.getDoctorsAction();
    this.props.getWardsAction();
  }

  render() {
    console.log('dashboard props');
    console.log(this.props);
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar />
        <div style={{
          paddingLeft: '190px', flexGrow: '1', display: 'flex', flexDirection: 'column',
        }}
        >
          <p className="app-header">COVID-19 Hospital Overview</p>
          <Buildings wards={this.props.wards} />
          <div className="bottom-dashboard">
            <div>
              Doctors
              <Doctors doctors={this.props.people.doctors} doctor="test" />
            </div>
            <div>
              Waiting List
              <Waiting patients={this.props.people.patients.filter((patient) => patient.WardID === null)} />
              Stats
              <Stats data={this.props} />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    people: state.people,
    wards: state.wards.ward,
  }
);

export default withRouter(connect(mapStateToProps, { getPatientsAction, getDoctorsAction, getWardsAction })(Dashboard));
