import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminMasterPage = () => {
    return (
        <div className="row justify-content-between">
            <div className="col-3 bg-black text-white text-start vh-100">
                <h2>Dash board</h2>

                <ul>
                    <li>
                        <NavLink to={"/admin/product-management"}>
                            Product management
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/admin/movie-management"}>
                            Movie management
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-9">
                <header className="text-start mb-5">Header content</header>

                <div className="content bg-white">
                    {/* content */}

                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminMasterPage;
