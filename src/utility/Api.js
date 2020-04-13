import axios from 'axios';
import { baseURL, apiKey } from '../utility/configuration';

const siteBaseUrl = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: siteBaseUrl
})
const createMovieDbUrl = (relativeUrl, queryParams) => {
    let createUrl = `${baseURL}${relativeUrl}?api_key=${apiKey}&language=en-US`;
    if (queryParams) {
        Object.keys(queryParams)
            .forEach(paramName => createUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return createUrl;
}

class Api {

    static defaultHeaders() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-localization": "en"
        };
    }

    static async get(route) {
        const fullUrl = createMovieDbUrl(route, {});

        return axiosInstance.get(fullUrl, {});
    }
    static async getMovies(route, param) {
        const fullUrl = createMovieDbUrl(route, param);
        return axiosInstance.get(fullUrl, {});
    }
    static put(route, params, auth, header = {}) {
    }

    static async post(route, params, auth, header = {}) {
    }

    static delete(route, params) {

    }


}

export default Api;