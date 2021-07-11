import React, { Component } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { loged } = this.props
    return (
      <>
        { loged === true ? <Home /> : <Login />}
      </>
    )
  }
}

function mapStateToProps(state) {
  return ({
    loged: state.user.loged
  })
}

export default connect (mapStateToProps, null)(App);