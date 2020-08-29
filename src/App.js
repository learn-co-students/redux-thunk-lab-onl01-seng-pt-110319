import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'

class App extends Component {   
  componentDidMount() {
    console.log(this.props) // this will fire second with our catsPics object
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics) // this will fire first with an empty array, then after CDM it comes back here with our cat pics info
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    catPics: state.cats, 
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(App)

