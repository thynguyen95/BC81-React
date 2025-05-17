import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailProduct = () => {
    const [detail, setDetail] = useState({});
    const [transform, setTransform] = useState("rotate(0deg)");

    // global state: bất kỳ cpn nào cũng có thể lấy được
    // prodId: tên key trong param giống với tên path được đặt ở route
    const param = useParams();
    console.log("param: ", param);

    const getProductByID = () => {
        axios({
            url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodId}`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response.data.content);
                setDetail(response.data.content);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    useEffect(() => {
        // gọi api khi html load xong
        getProductByID();
    }, [param.prodId]);

    return (
        <div>
            <h1 className="text-center text-danger">Detail Product</h1>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={detail.image}
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                                transform: transform,
                            }}
                        />

                        <div className="row justify-content-between">
                            {detail.detaildetailedImages?.map((deg, index) => {
                                return (
                                    <div
                                        className="col-2"
                                        key={index}
                                        style={
                                            transform === deg
                                                ? { border: "1px solid red" }
                                                : { border: "1px solid #000" }
                                        }
                                        onClick={() => {
                                            setTransform(deg);
                                        }}
                                    >
                                        <img
                                            style={{ transform: deg }}
                                            src={detail.image}
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="card-title">{detail.name}</h5>
                            <p className="card-text">{detail.description}</p>
                            <p className="card-text text-danger">
                                {detail.price}
                            </p>

                            <ul className="d-flex">
                                {detail.size?.map((size, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="btn btn-success mx-2"
                                        >
                                            <span>{size}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-danger text-center mt-5">Related Product</h2>

            <div className="row">
                {detail.relatedProducts?.map((item) => {
                    console.log("item: ", item.id);
                    return (
                        <div className="col-4" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.price}</p>
                                    {/* <a href="#" className="btn btn-primary">
                                        Read More
                                    </a> */}

                                    <NavLink
                                        to={`/detail/${item.id}`}
                                        className="btn btn-primary"
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

export default DetailProduct;
