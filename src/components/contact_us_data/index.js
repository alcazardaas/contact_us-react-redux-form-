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
    return (
      <div className='container'>
        <div className='justify-content-center'>
          <h3>Contact Us Information</h3>
        </div>

        <input value={this.state.search} onChange={this.updateSearch.bind(this)} className='search-input' type='text' id='search-bar' placeholder='SEARCH' />

        <div className="mytransfers-tablecontainer">
          <h1>Here goes data in item</h1>
        </div>
      </div>
    );
  }
}

export default AllContactUs
