const INITIAL_STATE = {
  allMovies: [{
    id: 1,
    title: 'Kingsglaive',
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
  },
  {
    id: 2,
    title: 'Final Fantasy',
    imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
  },
  {
    id: 3,
    title: 'Ghost In The Shell',
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
  },
  {
    id: 4,
    title: 'Appleseed Alpha',
    imagePath: 'images/Appleseed_Alpha.jpg',
  },
  {
    id: 5,
    title: 'Resident Evil',
    imagePath: 'images/Resident_Evil_Vendetta.jpg',
  },
],
  moviePlaying: {
    id: 0,
    title: '',
    imagePath:'',
  },
}


function movies (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_MOVIE_PLAYING':
      return { 
        ...state, 
        moviePlaying: state.allMovies.find((item) => item.id === action.payload) 
      }
    default:
      return state;
      
  }
}

export default movies;