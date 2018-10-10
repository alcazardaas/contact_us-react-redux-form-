import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Values } from "redux-form-website-template";
import ContactUs from './containers/contactus_container'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ContactUs />
      </div>
    );
  }
}

export default App;
