import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {  
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Almost ready...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    console.log(this.props.catPics)
    
    return (
      <div className={"app"}>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(App)

