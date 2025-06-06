import React from "react";
import { NavLink } from "react-router-dom";

const HeaderRQ = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to={"/react-query/use-query"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    useQuery
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={"/react-query/user-management"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    user Managemen
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderRQ;
