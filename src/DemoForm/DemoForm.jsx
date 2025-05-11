import React, { useState } from "react";

const DemoForm = () => {
    // state input
    const [userLogin, setUserLogin] = useState({
        email: "", // đặt tên key trùng với value của thuộc tính name trong input
        password: "",
    });

    console.log("userLogin: ", userLogin);

    // state error: stateDefault giống với state input
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleChangeInput = (e) => {
        console.log("e: ", e.target);

        const { name, value } = e.target;
        console.log("name: ", name, value);

        let type = e.target.getAttribute("data-type");

        // state error
        let messError = "";

        if (value === "") {
            messError = `${name} is required !`;
        } else {
            // kiểm tra tính hợp của dữ liệu (format)
            switch (type) {
                case "email": {
                    const regexEmail =
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                    if (!regexEmail.test(value)) {
                        messError = `${name} is invalid ! example: user@gmail.com !`;
                    }

                    break;
                }
                case "password": {
                    const regexPassword =
                        /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

                    if (!regexPassword.test(value)) {
                        messError = `${name} is invalid ! example: từ 6~20 ký tự, 1 chữ hoa, 1 chữ số, 1 ký tự đặc biệt`;
                    }
                    break;
                }
                default:
                    break;
            }
        }

        setError({
            ...error,
            [name]: messError,
        });

        // email: e.target.value,
        // password: e.target.value,

        // dynamic key
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // kiểm tra nếu còn lỗi validate => không được submit
        // error(email, password): chỉ cần 1 trong 2 field có lỗi => data đầu vào không hợp lệ
        // chạy vòng lặp để duyệt qua từng key => kiểm tra xem key đó có giá trị không
        // 1. nếu có giá trị => data còn bị lỗi => ko cho submit
        // 2. nếu ko có giá trị => data hợp lệ => cho submit
        for (let key in error) {
            if (error[key] !== "") {
                return;
            }
        }

        // xử lý submit
        console.log("submit", userLogin);
    };

    return (
        <div>
            <h1 className="text-danger">Demo Login Form</h1>

            <div className="mt-5">
                <form onSubmit={handleSubmit}>
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
                            // cách 1
                            // onChange={(e) => {
                            //     console.log("email: ", e.target.value);

                            //     // làm sao để giữ được giá trị của field còn lại, chỉ update đúng field này?

                            //     setUserLogin({
                            //         ...userLogin,
                            //         email: e.target.value,
                            //     });
                            // }}

                            // cách 2:
                            onChange={handleChangeInput}
                        />
                        {/* {error.email ? <p className="bg-black p-2 text-danger mt-2">
                            {error.email}
                        </p> : ''} */}
                        {error.email && (
                            <p className="bg-black p-2 text-danger mt-2">
                                {error.email}
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
                            // onChange={(e) => {
                            //     console.log("password: ", e.target.value);

                            //     setUserLogin({
                            //         ...userLogin,
                            //         password: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        {error.password && (
                            <p className="bg-black p-2 text-danger mt-2">
                                {error.password}
                            </p>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DemoForm;

// const userLogin = { email: 'abc' }

// { email: 'abc', pw: '123' }

// {...userLogin, pw: '123'}

// const userLogin = { "email-company" : 'abc', pw: '123' }
// userLogin.email-company
// userLogin.password
// userLogin["email-company"]

// falsy & truthy
