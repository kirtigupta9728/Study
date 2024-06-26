import axios from "axios";
import APIConstants from "./APIConstants";
export const instance = axios.create({
    baseURL: APIConstants.BASE_URL,
    timeout: 400000,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    },
});

instance.interceptors.request.use(
    async function (response) {
        return response;
    },
    function (error) {
        return error;
    }
);