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
      contactusData: []
    }
  }

  async componentWillMount() {
    await this.props.getAllContactUs()
    this.setState({
      contactusData: this.props.contactus
    })
  }

  async componentDidMount() {
    this.setState({
      contactusData: this.props.contactus
    })
  }

  componentDidUpdate(preProps) {
    if (this.props.contactus !== preProps.contactus) {
      this.setState({
        contactusData: this.props.contactus
      })
    }
  }

  submit = values => {
    values = { ...values, "id": (Math.floor((1 + Math.random()) * 0x10000)) }
    this.props.addContactUs(values)
    this.props.reset()
  }

  setGender(event) {
  }

  render() {

    var { isLoaded, error } = this.props

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
                <ContactUsData contactus={this.state.contactusData} />
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
  contactus: state.contactus.contactus || [],
  isLoaded: state.contactus.isLoaded,
  error: state.contactus.error,
})

const mapDispatchToProps = {
  getAllContactUs,
  addContactUs
}

const reduxFormConf = {
  form: 'simple',
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(ContactsUs))
