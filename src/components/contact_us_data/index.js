import React from 'react'

class AllContactUs extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {

    var { contactus } = this.props

    let filteredContactus = contactus.filter(
      (contact) => {
        return contact.firstName.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    );

    let items2 = filteredContactus.map(item => {
      return (
        <div key={item.firstName} className='row u-full-width div-list list-item'>
          <div className='offset-by-one columns five'>
            Name: {item.firstName + ' ' + item.lastName}
          </div>
          <div className='offset-by-one columns five'>
            Email: {item.email}
          </div>
          <div className='offset-by-one columns five'>
            Phone: {item.phone}
          </div>
          <div className='offset-by-one columns twelve'>
            Message: {item.message}
          </div>
        </div>
      )
    })

    return (
      <div className='container'>
        <div className='justify-content-center'>
          <h3>Contact Us Information</h3>
        </div>

        <input value={this.state.search} onChange={this.updateSearch.bind(this)} className='search-input' type='text' id='search-bar' placeholder='SEARCH' />

        <div className="tablecontainer">
          {items2}
        </div>
      </div>
    );
  }
}

export default AllContactUs
