import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './assets/css/app.css'

import ContactUs from './containers/contactus_container'

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid container-fluid--my'>
        <main>
          <ContactUs />
        </main>
      </div>
    )
  }
}

export default App
