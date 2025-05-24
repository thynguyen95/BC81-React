import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const ProductManagement = () => {
    const [arrProduct, setArrProduct] = useState([]);
    const [search, setSearch] = useSearchParams();

    // get param từ url về
    const keyword = search.get("prodName");
    console.log("keyword: ", keyword);

    // https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=oppo

    const kw = keyword ? `keyword=${keyword}` : "";

    const getAllProduct = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?${kw}`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response);
                setArrProduct(response.data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    useEffect(() => {
        getAllProduct();
    }, [keyword]);

    return (
        <div>
            <h1 className="text-danger">Product Management</h1>

            <NavLink to={"/admin/add-product"} className="btn btn-danger">
                Add new product
            </NavLink>

            <NavLink to={"/admin/product"} className="btn btn-danger">
                Add new product with useMatch
            </NavLink>

            {/* form tìm kiếm */}
            {/* Phân tích tính năng search: 
            B1: lấy được value từ input 
            B2: đưa value lên url
            B3: lấy value từ url và call api  */}
            <div className="mt-5 w-25">
                <form className="d-flex">
                    <div className="flex-grow-1 me-2">
                        <input
                            type="text"
                            name="keyword"
                            className="form-control"
                            id="exampleInputEmail1"
                            data-type="email"
                            placeholder="nhập từ khóa"
                            onInput={(e) => {
                                console.log("e: ", e.target.value);
                                setSearch({
                                    prodName: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Tìm kiếm
                    </button>
                </form>
            </div>

            {/* danh sách sản phẩm */}
            {/* get data từ api về và hiển thị lên giao diện 
            B1: call api => tạo function call api & gọi function đó trong useEffect()
            B2: call api thành công => set state
            B3: render with map  */}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* deleted : false
                        description : "demo description"
                        id : ""
                        img : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
                        name : "san pham 1"
                        price : "2000"
                        type : "APPLE" */}
                        {arrProduct?.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <img
                                            src={item.img}
                                            alt=""
                                            width={100}
                                        />
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        <NavLink
                                            to={`/admin/edit-product/${item.id}`}
                                            className="btn btn-success"
                                        >
                                            Edit
                                        </NavLink>
                                        <NavLink
                                            to={`/admin/product/${item.id}`}
                                            className="btn btn-success"
                                        >
                                            Edit with useMatch
                                        </NavLink>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
