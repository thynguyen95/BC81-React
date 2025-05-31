import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // {
    //     "id": 0,
    //     "email": "string",
    //     "password": "string",
    //     "name": "string",
    //     "gender": true,
    //     "phone": "string"
    // }

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: 0,
            email: "",
            password: "",
            name: "",
            gender: true,
            phone: "",
        },
        onSubmit: (values) => {
            console.log("values: ", values);

            // call api đăng ký
            axios({
                url: "https://apistore.cybersoft.edu.vn/api/Users/signup",
                method: "POST",
                data: values,
            })
                .then((response) => {
                    console.log("response: ", response);

                    if (response.data.statusCode === 200) {
                        alert(response.data.message);

                        navigate("/login");
                    }
                })
                .catch((err) => {
                    console.log("err: ", err.response.data.message);
                });
        },
    });

    return (
        <div>
            <h1 className="text-danger">Register</h1>

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
                            id="id"
                            onChange={formik.handleChange}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            email
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="email"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            password
                        </label>
                        <input
                            type="text"
                            name="password"
                            className="form-control"
                            id="password"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Gender
                        </label>

                        <div className="d-flex justify-content-around">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender1"
                                    value={true}
                                    defaultChecked
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="gender1"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="flexRadioDefault2"
                                    value={false}
                                    onChange={formik.handleChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault2"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            id="phone"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
