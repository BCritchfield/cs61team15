import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Sidebar from './Sidebar';
import Buildings from './Buildings';
import Doctors from './Doctors';
import '../style.scss';

const Dashboard = (props) => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}><Buildings /><div><div>Doctors<Doctors /></div><div>Patients</div></div></div>


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
