import axios from 'axios';
import {BASE_URL, DEFAULT_HEADER, RESPONSE_TYPE, SERVICE_URL} from "../Costants/NetworkConstants";

// SETTING
const axiosSettings = ( method = "", baseURL = "", url = "", resType = "", headers = null, params = null, data = null) => {
   return axios({ method: method, baseURL: baseURL, url: url, responseType: resType, headers: headers, params: params, data: data });
};


// GET, POST, DELETE, PATCH - SERVICES
export const axiosService = (method, param, data) => {
    let DATA = data ? {data} : null;
    let PARAMS = param ? {param} : null;
    return axiosSettings(method, BASE_URL, SERVICE_URL, RESPONSE_TYPE, DEFAULT_HEADER, PARAMS, DATA);
};


