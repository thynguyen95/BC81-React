import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const param = useParams();
    console.log("param: ", param);

    const getProductByID = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${param.id}`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response);
                formikEdit.setValues(response.data);
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

    useEffect(() => {
        getProductByID();
    }, []);

    const formikEdit = useFormik({
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

            axios({
                url: "https://apitraining.cybersoft.edu.vn/api/ProductApi/create",
                method: "POST",
                data: values,
            })
                .then((response) => {
                    console.log("response: ", response);
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
            <h1 className="text-center text-danger">Edit Product</h1>

            <div className="mt-5">
                <form onSubmit={formikEdit.handleSubmit}>
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
                            value={formikEdit.values.id}
                            onChange={formikEdit.handleChange}
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
                            value={formikEdit.values.name}
                            onChange={formikEdit.handleChange}
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
                            value={formikEdit.values.price}
                            onChange={formikEdit.handleChange}
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
                            value={formikEdit.values.img}
                            onChange={formikEdit.handleChange}
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
                            value={formikEdit.values.description}
                            onChange={formikEdit.handleChange}
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
                            value={formikEdit.values.type}
                            onChange={formikEdit.handleChange}
                        >
                            <option selected>Open this select menu</option>
                            <option value={"Samsung"}>Samsung</option>
                            <option value={"Apple"}>Apple</option>
                            <option value={"Oppo"}>Oppo</option>
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

export default EditProduct;
