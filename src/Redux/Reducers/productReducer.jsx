// rxslice
import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../services/configUrl";

const initialState = {
    arrProduct: [],
    detailProduct: {},
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setArrProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        setDetailProductAction: (state, action) => {
            state.detailProduct = action.payload;
        },
    },
});

export const { setArrProductAction, setDetailProductAction } =
    productReducer.actions;

export default productReducer.reducer;
