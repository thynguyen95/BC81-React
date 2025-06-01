import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

// 1. spinner xài cho tất cả cpn => mọi api gọi đều bật spinner
// 1. quản lý status của spinner bằng state hay redux ?
// 2. spinner đặt ở đâu ?

const Spinner = () => {
    const isLoading = useSelector((state) => state.spinnerReducer.isLoading);

    return (
        isLoading && (
            <div className="h-100 w-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center z-3 bg-warning">
                <PacmanLoader size={50} />
            </div>
        )
    );

    //     return isLoading ?  <div className="h-100 w-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center z-3 bg-warning">
    //     <PacmanLoader size={50} />
    // </div> : ''
};

export default Spinner;
