import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeQuantityAction,
    deleteProductAction,
} from "../Redux/Reducers/cartReducer";

const Cart = () => {
    // redux thủ công
    // const cartStore = useSelector((state) => state.cartReducer);

    // redux toolkit
    const cartStore = useSelector((state) => state.cartSliceReducer.cart);
    console.log("cartStore: ", cartStore);

    const dispatch = useDispatch();

    const renderCart = () => {
        return cartStore.map((product) => {
            return (
                <tr>
                    <th className="" scope="col">
                        {product.id}
                    </th>
                    <td>
                        <img src={product.image} alt="" width={100} />
                    </td>
                    <td>{product.name}</td>
                    <td>
                        <div className="flex align-items-center">
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    // tạo action
                                    const action = changeQuantityAction({
                                        id: product.id,
                                        quantityCart: -1,
                                    });
                                    dispatch(action);
                                }}
                            >
                                -
                            </button>
                            <span className="display-5 mx-2">
                                {product.quantityCart}
                            </span>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    // tạo action
                                    const action = changeQuantityAction({
                                        id: product.id,
                                        quantityCart: 1,
                                    });
                                    dispatch(action);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td>{product.price.toLocaleString()}</td>
                    <td>
                        {(
                            product.price * product.quantityCart
                        ).toLocaleString()}
                    </td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                const action = deleteProductAction(product.id);
                                dispatch(action);
                            }}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <h1 className="text-center text-danger">Danh sách giỏ hàng</h1>

            <table className="table table-striped text-start">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình Ảnh</th>
                        <th>Tên SP</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{renderCart()}</tbody>
            </table>
        </div>
    );
};

export default Cart;
