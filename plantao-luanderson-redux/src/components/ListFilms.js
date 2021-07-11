import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as movieAction from '../redux/actions/movies'

class ListFilms extends Component {
  render() {
    const { filmList, setMoviePlaying } = this.props;
    return (
      <div>
        <ul>
         {filmList.map((item) => (
           <li key={item.id}>
              <button  onClick={ () => setMoviePlaying(item.id) }>{item.title}</button>
           </li>))}
        </ul>
      </div>
    )
  }
}
 const mapStateToProps = (state) => ({
   filmList: state.movies.allMovies
 });

 const mapDispatchToProps = (dispatch) => ({
   setMoviePlaying: (id) => dispatch(movieAction.setMoviePlaying(id))
 })

export default connect(mapStateToProps, mapDispatchToProps)(ListFilms);