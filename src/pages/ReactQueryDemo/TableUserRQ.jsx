import { useQuery } from "@tanstack/react-query";
import React from "react";
import { userServices } from "../../services/user.service";

const TableUserRQ = () => {
    // dùng useQuery call api getAllUser và render data lên table
    const { data, error, isLoading } = useQuery({
        queryKey: ["getAllUserRQ"],
        queryFn: userServices.getAllUsers,
        staleTime: 5 * 60 * 1000,
        gcTime: 6 * 60 * 1000,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>{error.map}</div>;
    }

    console.log("data", data);

    return (
        <div className="mt-4">
            <h2 className="text-center text-white">Table User RQ</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {item.gender ? (
                                        <span className="btn btn-success">
                                            Male
                                        </span>
                                    ) : (
                                        <span className="btn btn-warning">
                                            Female
                                        </span>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableUserRQ;
