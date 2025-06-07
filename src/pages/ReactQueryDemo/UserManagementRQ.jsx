import React from "react";
import RegisterFormRQ from "./RegisterFormRQ";
import TableUserRQ from "./TableUserRQ";

const UserManagementRQ = () => {
    return (
        <div>
            <h1 className="text-center text-danger">UserManagementRQ</h1>

            {/* form register */}
            {/* tạo 1 cpn form chứa form register */}
            <RegisterFormRQ />

            {/* table list user */}
            {/* tạo 1 cpn table chứa danh sách user */}
            <TableUserRQ />
        </div>
    );
};

export default UserManagementRQ;
