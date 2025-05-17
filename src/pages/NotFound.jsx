import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    };

    return (
        <div>
            <h1>Page này không tồn tại !</h1>
            <button
                className="btn btn-success"
                onClick={() => {
                    goToHome();
                }}
            >
                Quay về trang chủ
            </button>
        </div>
    );
};

export default NotFound;
