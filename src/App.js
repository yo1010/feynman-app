import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:title" component={Card} />
      </Switch>
    )
  }
}

export default App;
