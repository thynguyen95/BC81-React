import axios from "axios";
import React, { useEffect, useState } from "react";

const ShoeShopAPI = () => {
    const [arrProduct, setArrProduct] = useState([]);

    const getAllProductAxios = () => {
        axios({
            url: "https://apistore.cybersoft.edu.vn/api/Product",
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response.data.content);

                setArrProduct(response.data.content);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    // getAllProductAxios();

    console.log("mounting");

    const getAllProduct = async () => {
        const response = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        console.log("response: ", response);

        const data = await response.json();
        console.log("data: ", data);

        setArrProduct(data.content);
    };

    // useEffect sẽ chạy sau khi html render và mỗi khi bất kỳ hàm setState được gọi

    // useEffect: không có dependencies => bị lặp vô tận
    // useEffect(() => {
    //     console.log("useEffect");

    //     getAllProductAxios();
    // });

    // dependency list:
    //     + [] thì hàm chỉ chạy 1 lần sau khi render cpn
    useEffect(() => {
        console.log("useEffect");

        // getAllProductAxios();

        getAllProduct();
    }, []);

    return (
        <div>
            <h1 className="text-danger">Shoe Shop API</h1>

            <div className="container">
                {/* <button
                    className="btn btn-success mb-5"
                    onClick={() => {
                        getAllProductAxios();
                    }}
                >
                    Get API
                </button> */}

                <div className="row">
                    {arrProduct.map((item) => {
                        return (
                            <div className="col-4 mb-3" key={item.id}>
                                <div className="card">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.name}
                                        </h5>
                                        <p className="card-text">
                                            {item.price}
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                            Go somewhere
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShoeShopAPI;
