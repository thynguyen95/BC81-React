import React from "react";
import { useDispatch } from "react-redux";
import useGetDataAPI from "../../CustomHook/useGetDataAPI";
import { useNavigate } from "react-router-dom";
import useRoute from "../../CustomHook/useRoute";

const DemoCustomHook = () => {
    // B1: chuẩn bị state
    // B2: call api (axios)
    // B3: useEffect()

    // const dispatch = useDispatch()
    const data = useGetDataAPI("https://apistore.cybersoft.edu.vn/api/Product");
    console.log("data: ", data);

    // const navigate = useNavigate();
    const { navigate, setSearch } = useRoute();

    return (
        <div>
            <h1 className="text-danger text-center">DemoCustomHook</h1>

            {/* {JSON.stringify(data)} */}

            {/* click btn => chuyển về page home  */}
            <button
                className="btn btn-success"
                onClick={() => {
                    navigate("/");
                }}
            >
                Go to home
            </button>

            {/* tạo 1 thanh search(input), khi gõ keyword vào input thì keyword hiển thị lên url */}
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default DemoCustomHook;
