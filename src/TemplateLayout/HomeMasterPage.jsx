import React from "react";
import HeaderRouter from "../Components/HeaderRouter";
import { Outlet } from "react-router-dom";

const HomeMasterPage = () => {
    return (
        <>
            <HeaderRouter />

            <div className="container">
                {/* Outlet đại diện cho các cpn khác nhau được load tại block này */}
                <div className="row justify-content-between">
                    {/* <div className="col-3 bg-dark h-100 text-white">
                        <h2>sidebar</h2>
                        <ul>
                            <li>Đời sống</li>
                            <li>Gia dụng</li>
                            <li>Thể thao</li>
                        </ul>
                    </div> */}

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

export default HomeMasterPage;
