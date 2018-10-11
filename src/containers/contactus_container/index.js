import React from 'react'
import 'babel-polyfill'
import { reset, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import ContactUs from './../../components/contact_us'
import ContactUsData from './../../components/contact_us_data'

import getAllContactUs from './../../redux/actionCreators/contactus'
import addContactUs from './../../redux/actionCreators/addContactUs'

class ContactsUs extends React.Component {

  constructor() {
    super();
    this.state = {
      loaded: 'non'
    }
  }

  async componentWillMount() {
    this.props.getAllContactUs()

  }

  submit = values => {
    values = { ...values, "id": (Math.floor((1 + Math.random()) * 0x10000)) }
    this.props.addContactUs(values)
    this.props.getAllContactUs()
    this.props.reset()
  }

  setGender(event) {
  }

  render() {

    var { isLoaded, contactus, contact, error } = this.props

    var cont = contactus
    
    if (contact.length > contactus.length)
      cont = contact

    return (
      isLoaded ?
        <div className="container">
          <div className="tabs" onChange={this.setGender.bind(this)}>
            <input type="radio" name="tab" id="tab1" defaultChecked />
            <label className='transfer-main-label' htmlFor="tab1">Contact Us</label>
            <input type="radio" name="tab" id="tab2" />
            <label className='transfer-main-label' htmlFor="tab2">Info</label>

            <div className="tab-content-wrapper">
              <div id="tab-content-1" className="tab-content">
                <ContactUs onSubmit={this.submit} />
              </div>
              <div id="tab-content-2" className="tab-content">
                <ContactUsData contactus={cont} />
              </div>
            </div>
          </div>
        </div> : error ? <p>Error...</p>
          : <div className='d-flex justify-content-center'>
            <h1>Loading...</h1>
          </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.createContactUs.contactus,
  contactus: state.contactus.contactus,
  isLoaded: state.contactus.isLoaded,
  error: state.contactus.error
})

const mapDispatchToProps = {
  getAllContactUs,
  addContactUs
}

const reduxFormConf = {
  form: 'simple',
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(ContactsUs))
