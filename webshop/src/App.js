import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './Components/Categories/Categories'

class App extends Component {

  clickMusic = () => {
      this.audio.play();
  }




  render() {
    return (
      <div className="App">
      <Categories active={this.clickMusic}/>
      <audio ref={(audio) => this.audio = audio} src="./gromkij-odinochnyj-klik-po-kompjuternoj-myshke.mp3"></audio>
      </div>
    );
  }
}

export default App;
