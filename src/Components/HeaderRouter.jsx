import React from "react";
import { NavLink } from "react-router-dom";

const HeaderRouter = () => {
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
                                {/* <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a> */}
                                <NavLink
                                    to={"/home"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    style={({ isActive }) =>
                                        // const { isActive } = props;
                                        isActive
                                            ? { color: "red" }
                                            : { color: "white" }
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={"/about"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={"/product"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={"/search"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Search
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to={"/admin"}
                                    className={(props) =>
                                        props.isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                >
                                    Admin
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Redux
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to={"/change-number-redux"}
                                        >
                                            Change number
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="dropdown-item"
                                            to={"/change-fontsize-redux"}
                                        >
                                            Change fontsize
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderRouter;
