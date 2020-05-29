import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';


import Login from './Login';
import Dashboard from './Dashboard';
import '../style.scss';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};


const App = (props) => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={FallBack} />
        </Switch>

      </div>
    </Router>
  );
};

export default App;
