import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard-Layout/Dashboard.Component';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' component={Dashboard}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
