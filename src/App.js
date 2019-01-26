import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './Components/Profile/Profile';
import './App.css';
import { resolve, reject } from 'q';

var options ={
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var crd;

function success(pos) {
  crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

console.log(`asd: ${myLat}, ${myLong}`)

console.log(`asd : ${crd}`)

const initialState={
  lat: crd.latitude,
  long: crd.longitude
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <Profile 
          position = {this.state.lat}
        />
      </div>
    );
  }
}

export default App;
