import React, { useState } from "react";

const DemoForm = () => {
    // state input
    const [userLogin, setUserLogin] = useState({
        email: "", // đặt tên key trùng với value của thuộc tính name trong input
        password: "",
    });

    console.log("userLogin: ", userLogin);

    const handleChangeInput = (e) => {
        console.log("e: ", e.target);

        const { name, value } = e.target;
        console.log("name: ", name, value);

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
                            // onChange={(e) => {
                            //     console.log("password: ", e.target.value);

                            //     setUserLogin({
                            //         ...userLogin,
                            //         password: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
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
