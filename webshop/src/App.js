import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import BookCard from './Components/BookContainer/BookContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookCard/>
      </div>
    );
  }
}

export default App;
