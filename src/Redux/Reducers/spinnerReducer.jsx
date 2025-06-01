// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const spinnerReducer = createSlice({
    name: "spinnerReducer",
    initialState,
    reducers: {
        enableLoadingAction: (state, action) => {
            state.isLoading = true;
        },
        disableLoadingAction: (state, action) => {
            state.isLoading = false;
        },
        handleLoadingAction: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    enableLoadingAction,
    disableLoadingAction,
    handleLoadingAction,
} = spinnerReducer.actions;

export default spinnerReducer.reducer;
