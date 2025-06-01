import { useQuery } from "@tanstack/react-query";
import React from "react";
import { productServices } from "../../services/product.service";
import { addProductAction } from "../../Redux/Reducers/cartReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const ShoeShopRQ = () => {
    const dispatch = useDispatch();

    const query = useQuery({
        queryKey: ["getAllProduct"],
        queryFn: productServices.getAllProduct,
        staleTime: 1000 * 60, // thời gian mà dữ liệu được xem là dữ liệu cũ
        gcTime: 2000 * 60, // thời gian xóa cache
    });

    // query: data, error, isLoading
    console.log("query", query.data);

    if (query.isLoading) {
        return <div>Loading...</div>;
    } else if (query.error) {
        return <div>{query.error.map}</div>;
    }

    return (
        <div>
            <h1>ShoeShopRQ</h1>

            <div className="row">
                {query.data?.map((item) => {
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
                                    <NavLink
                                        className="btn btn-success"
                                        to={`/detail/${item.id}`}
                                    >
                                        Read more
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ShoeShopRQ;
