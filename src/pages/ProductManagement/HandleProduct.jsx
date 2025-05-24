import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";

const HandleProduct = () => {
    const navigate = useNavigate();

    const match = useMatch("/admin/product/:id");
    // Nếu match có data({}), nếu ko có data thì là null
    console.log("match: ", match);

    const isEdit = !!match; // convert object => boolean
    console.log("isEdit: ", isEdit);

    const getProductByID = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${match.params.id}`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response);
                formikProduct.setValues(response.data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    useEffect(() => {
        if (isEdit) {
            getProductByID();
        }
    }, []);

    const formikProduct = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: "",
            img: "",
            description: "",
            type: "",
            deleted: true,
        },
        onSubmit: (values) => {
            console.log("values: ", values);

            let url =
                "https://apitraining.cybersoft.edu.vn/api/ProductApi/create";
            let method = "POST";

            if (isEdit) {
                url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${values.id}`;
                method = "PUT";
            }

            axios({
                url: url,
                method: method,
                data: values,
            })
                .then((response) => {
                    console.log("response: ", response);

                    if (isEdit) {
                        alert("Bạn đã update thành công !");
                    } else {
                        alert("Bạn đã thêm thành công !");
                    }

                    navigate("/admin/product-management");
                })
                .catch((error) => {
                    console.log("error: ", error);
                });

            // const navigate = useNavigate();
            // const isValid = false;
            // if (isValid) {
            //     navigate('/home');
            // } else {
            //     navigate('/forgot-pass');
            // }
        },
    });

    return (
        <div>
            <h1 className="text-center text-danger">
                {isEdit ? "Edit Product" : "Add Product"}
            </h1>

            <div className="mt-5">
                <form onSubmit={formikProduct.handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            ID
                        </label>
                        <input
                            type="text"
                            name="id"
                            className="form-control"
                            id="exampleInputid1"
                            data-type="id"
                            value={formikProduct.values.id}
                            onChange={formikProduct.handleChange}
                            disabled={isEdit}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputname1"
                            className="form-label"
                        >
                            name
                        </label>
                        <input
                            type="name"
                            name="name"
                            className="form-control"
                            id="exampleInputname1"
                            data-type="name"
                            value={formikProduct.values.name}
                            onChange={formikProduct.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            price
                        </label>
                        <input
                            type="price"
                            name="price"
                            className="form-control"
                            id="exampleInputphone1"
                            data-type="phone"
                            value={formikProduct.values.price}
                            onChange={formikProduct.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            img
                        </label>
                        <input
                            type="img"
                            name="img"
                            className="form-control"
                            id="exampleInputphone1"
                            data-type="phone"
                            value={formikProduct.values.img}
                            onChange={formikProduct.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            description
                        </label>
                        <input
                            type="description"
                            name="description"
                            className="form-control"
                            id="exampleInputphone1"
                            data-type="phone"
                            value={formikProduct.values.description}
                            onChange={formikProduct.handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            type
                        </label>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="type"
                            value={formikProduct.values.type}
                            onChange={formikProduct.handleChange}
                        >
                            <option value="">Open this select menu</option>
                            <option value={"SAMSUNG"}>SAMSUNG</option>
                            <option value={"APPLE"}>APPLE</option>
                            <option value={"OPPO"}>OPPO</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HandleProduct;
