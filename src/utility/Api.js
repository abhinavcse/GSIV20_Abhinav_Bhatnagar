import axios from 'axios';
const siteBaseUrl = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL: siteBaseUrl
})

class Api {

    static defaultHeaders() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-localization": "en"
        };
    }

    static async get(route) {
        console.log(route);
        let headers = this.defaultHeaders()
        return axiosInstance.get(route, {});
    }

    static put(route, params, auth, header = {}) {
    }

    static async post(route, params, auth, header = {}) {
    }

    static delete(route, params) {

    }


}

export default Api;