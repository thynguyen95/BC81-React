import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../Redux/Reducers/cartReducer";
import { http } from "../services/configUrl";
import { getProductActionThunk } from "../Redux/Reducers/productReducer";

// Bài tập giỏ hàng
/*
1. xây dựng trang home 
    + call api để lấy ds sp => hiển thị lên giao diện 
    - call api => function call api => useEffect 
2. tạo page cart và xây dựng giao diện cho page cart 
    + tạo reducer cho cart 
*/

const Home = () => {
    // const [arrProduct, setArrProduct] = useState([]);

    const arrProduct = useSelector((state) => state.productReducer.arrProduct);

    const dispatch = useDispatch();

    const getAllProduct = () => {
        // axios({
        //     url: "https://apistore.cybersoft.edu.vn/api/Product",
        //     method: "GET",
        // })
        //     .then((response) => {
        //         console.log("response: ", response);

        //         setArrProduct(response.data.content);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //     });

        // http.get("/api/Product")
        //     .then((response) => {
        //         console.log("response: ", response);

        //         setArrProduct(response.data.content);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //     });
        const actionThunk = getProductActionThunk();
        dispatch(actionThunk);
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <h1 className="text-center text-danger">Danh sách sản phẩm</h1>

            <div className="row">
                {arrProduct?.map((item) => {
                    return (
                        <div className="col-4 mb-4" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            // cách 1
                                            // // 1. tạo action chứa dữ liệu để đưa lên store
                                            // const action = {
                                            //     type: "ADD_PRODUCT",
                                            //     payload: {
                                            //         ...item,
                                            //         quantityCart: 1,
                                            //     },
                                            // };
                                            // // 2. đưa action lên store bằng dispatch
                                            // dispatch(action);

                                            // cách 2: sử dụng redux slice
                                            // 2.1 tạo action slice thủ công
                                            // const action = {
                                            //     // type: tenReducer/tenMethod
                                            //     type: "cartReducer/addProductAction",
                                            //     payload: {
                                            //         ...item,
                                            //         quantityCart: 1,
                                            //     },
                                            // };
                                            // dispatch(action);

                                            // 2.2 tạo action slice bằng hàm export
                                            const payload = {
                                                ...item,
                                                quantityCart: 1,
                                            };
                                            const action =
                                                addProductAction(payload);
                                            dispatch(action);
                                        }}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
