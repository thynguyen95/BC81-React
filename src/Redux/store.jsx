import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./Reducers/numberReducer";
import { fontSizeReducer } from "./Reducers/fontSizeReducer";
import cartReducer from "./Reducers/cartReducer";
import userReducer from "./Reducers/userReducer";
import productReducer from "./Reducers/productReducer";
import spinnerReducer from "./Reducers/spinnerReducer";

const cartDefault = [
    {
        id: 1,
        name: "product",
        price: 1000,
        quantityCart: 2,
        image: "https://picsum.photos/id/1/200/300",
    },
];

export const store = configureStore({
    reducer: {
        // có thể có nhiều reducer
        // numberReducer: (number = 200, action) => {
        //     console.log("action: ", action);

        //     // xử lý logic

        //     const { type, payload } = action;
        //     if (type === "CHANGE_QUANTITY") {
        //         number += payload;
        //     }

        //     return number;
        // },
        // fontSizeReducer: (fontSize = 50, action) => {
        //     console.log("action: ", action);

        //     const { type, payload } = action;
        //     if (type === "CHANGE_FSIZE") {
        //         fontSize += payload;
        //     }

        //     return fontSize;
        // },
        numberReducer: numberReducer,
        fontSizeReducer: fontSizeReducer,
        cartReducer: (cart = cartDefault, action) => {
            const { type, payload } = action;

            if (type === "ADD_PRODUCT") {
                // kiểm tra sp đã có trong giỏ hàng chưa
                const itemIndex = cart.findIndex(
                    (item) => item.id === payload.id
                );

                if (itemIndex !== -1) {
                    // sp đã tồn tại => tăng số lượng lên 1

                    const cartUpdate = [...cart]; // tạo ra bản sao của cart
                    cartUpdate[itemIndex] = {
                        ...cartUpdate[itemIndex], // sao chép phần tử item bên trong trong cart để xử lý tính bất biến (imutable)
                        quantityCart: cartUpdate[itemIndex].quantityCart + 1, // cập nhật giá trị cho thuộc tính quantityCart
                    };

                    return cartUpdate;
                } else {
                    // sp chưa tồn tại => thêm sp vào giỏ hàng
                    // cart.push(payload);// ko sử dụng cách push trực tiếp

                    const newCart = [...cart, payload];

                    return newCart;
                }
            }

            return [...cart];
        },
        cartSliceReducer: cartReducer,
        userReducer: userReducer,
        productReducer,
        spinnerReducer,
    },
});

// arr = [
//     { id: 1, name: 'abc' }, //0
//     { id: 2, name: 'abc' },//1
//     {id: 3, name: 'abc'},//2
// ]

// arr[1].name = 'bdhsh'
