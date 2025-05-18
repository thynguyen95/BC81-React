import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const AddProduct = () => {
    const formik = useFormik({
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
            <h1 className="text-center text-danger">Add Product</h1>

            <div className="mt-5">
                <form onSubmit={formik.handleSubmit}>
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
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
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

export default AddProduct;
