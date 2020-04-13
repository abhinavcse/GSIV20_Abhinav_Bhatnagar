import { baseURL, apiKey } from '../utility/configuration';
//import Api from '../utility/Api';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let createUrl = `${baseURL}${relativeUrl}?api_key=${apiKey}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => createUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return createUrl;
}

export const getTopMovies = async ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/upcoming', {
    page
  });
  return fetch(fullUrl);
  /*  let data=Api.get(fullUrl).then((res) => {
     if (res.data.status = '200') {
       return res.data;
     } else {
       return {};
     }
   }); */
}

export const searchMovies = async ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query
  });
  return fetch(fullUrl);
}

export const getMovieDetails = async ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`,{});
  return fetch(fullUrl);
}
