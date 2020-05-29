import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Buildings from './Buildings';
import Doctors from './Doctors';
import Waiting from './Waiting';
import Stats from './Stats';
import { getPatientsAction, getDoctorsAction } from '../actions';
import '../style.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: null,
      patients: null,
    };
  }

  componentDidMount() {
    this.props.getPatientsAction();
    this.props.getDoctorsAction();
  }

  render() {
    console.log(this.state);
    console.log('this.props');
    console.log(this.props);
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar />
        <div style={{
          paddingLeft: '190px', flexGrow: '1', display: 'flex', flexDirection: 'column',
        }}
        >
          <p className="app-header">COVID-19 Hospital Overview</p>
          <Buildings />
          <div className="bottom-dashboard">
            <div>
              Doctors
              <Doctors doctor="test" />
            </div>
            <div>
              Waiting List
              <Waiting />
              Stats
              <Stats />
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
  }
);

export default withRouter(connect(mapStateToProps, { getPatientsAction, getDoctorsAction })(Dashboard));
