import { imageBaseUrl } from '../../utility/configuration';
const TMDB_IMAGE_BASE_URL = imageBaseUrl;

export const updateMoviePictureUrls = (movieResult, width = 300) => {
  if (movieResult) {
    return {
      ...movieResult,
      backdrop_path: `${TMDB_IMAGE_BASE_URL}${movieResult.backdrop_path}`,
      poster_path: `${TMDB_IMAGE_BASE_URL}${movieResult.poster_path}`,
    }
  }
  return {};
};

export const getMoviesList = (moviesResponse) => {
  return !!moviesResponse ? ([
    ...moviesResponse.map(movieResult => updateMoviePictureUrls(movieResult))
  ]) : null;
}
