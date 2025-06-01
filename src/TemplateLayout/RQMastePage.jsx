import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRQ from "../Components/HeaderRQ";

const RQMasterPage = () => {
    return (
        <>
            <HeaderRQ />

            <div className="container">
                <div className="row justify-content-between">
                    <div className="bg-info">
                        <Outlet />
                    </div>
                </div>
            </div>

            <footer className="bg-black text-center text-white p-5 mt-5">
                Footer
            </footer>
        </>
    );
};

export default RQMasterPage;
