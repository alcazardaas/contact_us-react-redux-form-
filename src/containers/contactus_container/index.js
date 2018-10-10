import React from 'react'

import ContactUs from './../../components/contact_us'
import ContactUsData from './../../components/contact_us_data'

class ContactsUs extends React.Component {

  setGender(event) {
  }

  render() {
    return (
      <div className="container">
        <div className="tabs" onChange={this.setGender.bind(this)}>
          <input type="radio" name="tab" id="tab1" defaultChecked />
          <label className='transfer-main-label' htmlFor="tab1">Contact Us</label>
          <input type="radio" name="tab" id="tab2" />
          <label className='transfer-main-label' htmlFor="tab2">Info</label>

          <div className="tab-content-wrapper">
            <div id="tab-content-1" className="tab-content">
              <ContactUs />
            </div>
            <div id="tab-content-2" className="tab-content">
              <ContactUsData />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactsUs
