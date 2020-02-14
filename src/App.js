import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Card from './components/Card';
import db from './firebase';
import store from './store/store';
import { getFirebaseData } from './actions/actions';

class App extends Component {
  constructor() {
    super();
    this.cardArray = [];
    db.collection('Cards').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        this.cardArray.push(doc.data())
      })
    })
    console.log(this.cardArray)
    store.dispatch(getFirebaseData(this.cardArray));
    console.log(store.getState())
  }
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
