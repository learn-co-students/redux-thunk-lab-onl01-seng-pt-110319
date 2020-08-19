import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    // console.log('componentDidMount', this.props)
    // console.log('componentDidMount', this.props.loading)
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    // console.log('render', this.props.catPics)
    // console.log('render', this.props.loading)
    return (
      <div className='App'>
        <h1>CatBook</h1>
        {this.handleLoading()}
        
      </div>
    );
  }
}

//in order to map in our CatList.js we need this
const mapStateToProps = state => {
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

export default connect( mapStateToProps, mapDispatchToProps)(App)

// Why is this.props.catPics set to [] on the first 
// two renders? The first render is the initial 
// render, which is always expected. The second 
// render, however, occurs when send our first
//  dispatch, dispatch({type: 'LOADING_CATS'}).
//   If we logged this.props.loading instead of
//    catPics, we would see the following logged:
//    third render we get our 20 obj when promise resolves