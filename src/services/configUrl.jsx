import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "./constant";

// cấu hình axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000, // giới hạn thời gian call api
});

// cấu hình cho request: khi call api
http.interceptors.request.use((request) => {
    request.headers = {
        ...request.headers, //giữ lại các api có header riêng
        Authorization: localStorage.getItem(TOKEN), // thêm phần chung,
        TokenCybersoft: TOKEN_CYBERSOFT,
    };

    return request;
});

// cấu hình cho response: khi api trả data về
http.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        return Promise.reject(err);
    }
);
