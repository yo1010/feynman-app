import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store/store';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default App;
