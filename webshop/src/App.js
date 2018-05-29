import React, { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header />
      </Fragment>
    );
  }
}

export default App;
