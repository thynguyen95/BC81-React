import { http } from "../../services/configUrl";
import {
    setArrProductAction,
    setDetailProductAction,
} from "../Reducers/productReducer";

//action
export const getProductActionThunk = () => {
    return (dispatch) => {
        http.get("/api/Product")
            .then((response) => {
                console.log("response: ", response);

                // tạo action payload
                const actionPayload = setArrProductAction(
                    response.data.content
                );
                dispatch(actionPayload);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };
};

// action call product by ID
// B1: call api
// B2: dispatch data lên store  => cần action payload => tạo action
// B3: dispatch function

export const getProductDetailByIDActionThunk = (id) => {
    return (dispatch) => {
        http.get(`/api/Product/getbyid?id=${id}`)
            .then((response) => {
                console.log("response: ", response);

                // tạo action payload
                const actionPayload = setDetailProductAction(
                    response.data.content
                );

                // dispatch lên store
                dispatch(actionPayload);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };
};
