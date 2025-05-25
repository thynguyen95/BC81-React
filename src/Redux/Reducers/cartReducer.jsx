// rxslice => cú pháp tạo nhanh reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // number: 200
    cart: [
        {
            id: 1,
            name: "product",
            price: 1000,
            quantityCart: 2,
            image: "https://picsum.photos/id/1/200/300",
        },
    ],
};

const cartReducer = createSlice({
    name: "cartReducer", //tên reducer
    initialState, // giá trị state default ban đầu
    reducers: {
        addProductAction: (state, action) => {
            const { type, payload } = action;
            console.log("payload: ", payload);

            // Redux toolkit sử dụng Immer để tự xử lý imutable nên có thể "code giống như" đang thay đổi trực tiếp state
            // kiểm tra sp đã có trong giỏ hàng chưa
            const itemIndex = state.cart.findIndex(
                (item) => item.id === payload.id
            );

            if (itemIndex !== -1) {
                state.cart[itemIndex].quantityCart += 1;
            } else {
                state.cart.push(payload);
            }
        },
        changeQuantityAction: (state, action) => {
            const { payload } = action;

            const itemCart = state.cart.find((item) => item.id === payload.id);

            if (itemCart) {
                itemCart.quantityCart += payload.quantityCart;
            }
        },
        deleteProductAction: (state, action) => {
            const { payload } = action;

            state.cart = state.cart.filter((item) => item.id !== payload);
        },
    },
});

export const { addProductAction, changeQuantityAction, deleteProductAction } =
    cartReducer.actions;

export default cartReducer.reducer;
