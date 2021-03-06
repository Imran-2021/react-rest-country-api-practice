import React from 'react'
import './App.css';
import Abc from './Components/abc/abc';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sorry from './Components/Sorry/Sorry';
import CountryDetail from './Components/CountryDetail/CountryDetail';
function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/abc'>
          <Abc/>
        </Route>
        <Route path='/Country/:countryDetail'>
          <CountryDetail></CountryDetail>
        </Route>
        <Route exact path='/'>
          <Abc/>
        </Route>
        <Route path='*'>
          <Sorry/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
