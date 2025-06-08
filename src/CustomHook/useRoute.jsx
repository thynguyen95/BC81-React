import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

// useRoute: Navigate, param, search

const useRoute = () => {
    const navigate = useNavigate();
    const param = useParams();
    const [search, setSearch] = useSearchParams();

    // return về các giá trị của route trong 1 object
    return {
        navigate: navigate,
        param: param,
        search: search,
        setSearch: setSearch,
    };
};

export default useRoute;
