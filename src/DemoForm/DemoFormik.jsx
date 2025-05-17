import { useFormik } from "formik";
import React from "react";
import * as yup from "yup"; //validation

const DemoFormik = () => {
    // thêm 3 field vào form: phone, city(selectbox, dropdown box), gender(radio)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            phone: "",
            gender: "",
            city: "",
        },
        validationSchema: yup.object().shape({
            email: yup
                .string()
                .required("Email is required !")
                .email("Email is invalid ! example: user@gmail.com"),
            password: yup
                .string()
                .required("Password is required !")
                .min(6, "6~10 ký tự !")
                .max(10, "6~10 ký tự "),
            phone: yup
                .string()
                .required("Phone is required !")
                .matches(
                    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    "Phone is valid !"
                ),
        }),
        onSubmit: (values) => {
            console.log("values: ", values);

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
            <h1 className="text-danger">Demo Formik</h1>

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
                        {formik.errors.email && (
                            <p className="text-danger mt-2">
                                {formik.errors.email}
                            </p>
                        )}
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
                        {formik.errors.password && (
                            <p className="text-danger mt-2">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Phone
                        </label>
                        <input
                            type="phone"
                            name="phone"
                            className="form-control"
                            id="exampleInputphone1"
                            data-type="phone"
                            onChange={formik.handleChange}
                        />
                        {formik.errors.phone && (
                            <p className="text-danger mt-2">
                                {formik.errors.phone}
                            </p>
                        )}
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
                                    value={"Male"}
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender === "Male"}
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
                                    value={"Female"}
                                    defaultChecked
                                    onChange={formik.handleChange}
                                    checked={formik.values.gender === "Female"}
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
                            City
                        </label>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="city"
                            onChange={formik.handleChange}
                        >
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
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

export default DemoFormik;
