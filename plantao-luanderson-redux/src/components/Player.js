import React, { Component } from 'react'
import { connect } from 'react-redux';

class Player extends Component {
  render() {
    const { moviePlay } = this.props;
    return (
      <>
        <div className="player">
          <h4>{ moviePlay.title }</h4>
          <img src={ moviePlay.imagePath }alt={`Imagem do Filme ${moviePlay.title}`}></img>
        </div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return({
    moviePlay: state.movies.moviePlaying,
  })
}

export default connect(mapStateToProps, null)(Player);