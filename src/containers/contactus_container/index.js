import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import ContactUs from './../../components/contact_us'
import ContactUsData from './../../components/contact_us_data'

import getAllContactUs from './../../redux/actionCreators/contactus'

class ContactsUs extends React.Component {

  async componentDidMount() {
    this.props.getAllContactUs()
  }

  submit = values => {
    //this.props.createClient(values)
    //history.push('/home')
    alert(values);
  }

  setGender(event) {
  }

  render() {

    var { isLoaded, contactus, error } = this.props

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
                <ContactUsData contactus={contactus} />
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
  contactus: state.contactus.contactus,
  isLoaded: state.contactus.isLoaded,
  error: state.contactus.error
})

const mapDispatchToProps = {
  getAllContactUs
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsUs)
