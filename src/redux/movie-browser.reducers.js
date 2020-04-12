import {combineReducers} from 'redux';
import { createReducer, createAsyncReducer } from './redux.helpers';
import { keys as movieActionKeys } from './movie-browser.actions';

// This will create a new state with both the existing 
// movies and new pages of movies
const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];
  // Create a new state object to be returned
  // When creating the new state, be sure to include any
  // existing properties we want to persist
  return {
    ...state,
    isLoading: false,
    response: {
      ...action.response,
      results: [
        ...existingMovies,
        ...action.response.results
      ]
    }
  };
}

// Combines our movie browser related reducers to build our movieBrowser reducer
const movieBrowserReducer = combineReducers({
  topMovies: createReducer(movieActionKeys.GET_TOP_MOVIES, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieSearch: createReducer(movieActionKeys.SEARCH_MOVIES, {
    [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createReducer(movieActionKeys.GET_MOVIE_DETAILS),
});

export default movieBrowserReducer;
