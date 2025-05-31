import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { loginActionAsync } from "../Redux/Reducers/userReducer";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("values: ", values);

            // call api đăng nhập
            // axios({
            //     url: "https://apistore.cybersoft.edu.vn/api/Users/signin",
            //     method: "POST",
            //     data: values,
            // })
            //     .then((response) => {
            //         console.log("response: ", response);

            //         const token = response.data.content.accessToken;
            //         localStorage.setItem("accessToken", token);
            //     })
            //     .catch((err) => {
            //         console.log("err: ", err);
            //     });

            // dùng actionAsync
            const actionAsync = loginActionAsync(values);
            dispatch(actionAsync);
        },
    });

    return (
        <div>
            <h1 className="text-center text-danger">Login</h1>

            <div className="mt-5">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            data-type="email"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            data-type="password"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
