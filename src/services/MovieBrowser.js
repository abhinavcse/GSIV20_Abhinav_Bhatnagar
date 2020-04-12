import { baseURL, apiKey } from '../utility/configuration';
import Api from '../utility/Api';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let createUrl = `${baseURL}${relativeUrl}?api_key=${apiKey}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => createUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return createUrl;
}

class MovieBrowser {

  static getTopMovies(page) {
    const fullUrl = createMovieDbUrl('/movie/top_rated', {
      page
    });

    Api.get(fullUrl).then((res) => {
      if (res.data.status = '200') {
        return res.data.results;
      } else {
        return [];
      }

    });
  }
}
export default MovieBrowser;