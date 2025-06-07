import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { userServices } from "../../services/user.service";

const RegisterFormRQ = () => {
    const [userRegister, setUserRegister] = useState({
        id: 0,
        email: "",
        password: "",
        name: "",
        gender: true,
        phone: "",
    });

    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setUserRegister({
            ...userRegister,
            [name]: value,
        });
    };

    // useQueryClient: thao tác trực tiếp với cache của react query
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ["registerUserRQ"],
        mutationFn: userServices.registerUser,
        onSuccess: (data) => {
            console.log("data: ", data);

            // xóa cache và fetch lại data
            queryClient.invalidateQueries("getAllUserRQ");
        },
        onError: (err) => {
            console.log("err: ", err);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userRegister", userRegister);

        // call api - gửi data lên server
        mutation.mutate(userRegister);
    };

    return (
        <div className="mt-5">
            <h2 className="text-center text-white">Register Form RQ</h2>

            <div className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputID" className="form-label">
                            ID
                        </label>
                        <input
                            type="text"
                            name="id"
                            className="form-control"
                            id="exampleInputID"
                            onChange={handleChangeInput}
                        />
                    </div>
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
                            data-type="password"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputName"
                            className="form-label"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="exampleInputName"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputGender"
                            className="form-label"
                        >
                            Gender
                        </label>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="gender"
                            name="gender"
                            onChange={handleChangeInput}
                        >
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPhone"
                            className="form-label"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            className="form-control"
                            id="exampleInputPhone"
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

export default RegisterFormRQ;
