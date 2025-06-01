import axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "./constant";
import { store } from "../Redux/store";
import {
    disableLoadingAction,
    enableLoadingAction,
    handleLoadingAction,
} from "../Redux/Reducers/spinnerReducer";

// cấu hình axios
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000, // giới hạn thời gian call api
});

// cấu hình cho request: khi call api
http.interceptors.request.use((request) => {
    console.log("request: ", request);
    // bật loading
    // store.dispatch(enableLoadingAction());

    // cách 1: kiểm tra url có chứa ký tự cần skip loading
    // if (!request.url.includes("signin")) {
    //     console.log("skip loading ");

    //     store.dispatch(handleLoadingAction(true));
    // }

    // cách 2: tùy chỉnh cấu hình cho từng request
    // skipLoading: tự đặt tên, truyền param này ở nơi call api cần bỏ qua loading
    if (!request.skipLoading) {
        store.dispatch(handleLoadingAction(true));
    }

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
        //tắt loading
        // store.dispatch(disableLoadingAction());
        store.dispatch(handleLoadingAction(false));

        return response;
    },
    (err) => {
        // tắt loading
        // store.dispatch(disableLoadingAction());
        store.dispatch(handleLoadingAction(false));

        return Promise.reject(err);
    }
);
