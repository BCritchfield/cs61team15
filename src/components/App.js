import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';


import Sidebar from './Sidebar';
import Buildings from './Buildings';
import Doctors from './Doctors';
import Waiting from './Waiting';
import Stats from './Stats';
import '../style.scss';

const Dashboard = (props) => {
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
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


const App = (props) => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={FallBack} />
        </Switch>

      </div>
    </Router>
  );
};

export default App;
