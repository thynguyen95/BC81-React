// rxslice
import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../services/configUrl";

const initialState = {
    arrProduct: [],
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setArrProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
    },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;

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
