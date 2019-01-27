import React, { Component } from 'react';
import profilePic from './profilePic.svg';
import Profile from './Components/Profile/Profile';
import './App.css';


class App extends Component {
  render() {
    return (


      <div className="App">
        <Profile />

        <header className="App-header">
          <img src={profilePic} />


        </header>
      </div>
    );
  }
}

export default App;
