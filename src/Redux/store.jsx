import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // có thể có nhiều reducer
        numberReducer: (number = 200, action) => {
            console.log("action: ", action);

            // xử lý logic

            const { type, payload } = action;
            if (type === "CHANGE_QUANTITY") {
                number += payload;
            }

            return number;
        },
        fontSizeReducer: (fontSize = 50, action) => {
            console.log("action: ", action);

            const { type, payload } = action;
            if (type === "CHANGE_FSIZE") {
                fontSize += payload;
            }

            return fontSize;
        },
    },
});
