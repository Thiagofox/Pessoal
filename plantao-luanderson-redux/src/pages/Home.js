import React, { Component } from 'react'
import ListFilms from '../components/ListFilms';
import Player from '../components/Player';
import { connect } from 'react-redux';

 class Home extends Component {
  render() {
    const { userName } = this.props
    return (
      <>
        <header>
          <h2>Oi { userName }, estamos felizes por vocês estarem aqui </h2>
        </header> 
        <section>
          <Player />
          <ListFilms />
        </section>
      </>
    )
  }
}

function mapStateToProps(state) {
  return ({
    userName: state.user.login,
  })
}

export default connect (mapStateToProps, null)(Home);