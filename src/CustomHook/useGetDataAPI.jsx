import React, { useEffect, useState } from "react";

// custom hook tương tự cpn, tuy nhiên kết quả trả về không phải là jsx(giao diện) mà là 1 giá trị do mình định nghĩa (string, object, boolean, number, array,...)

const useGetDataAPI = (url) => {
    const [data, setData] = useState(null);

    //call api
    const fetchAPI = async () => {
        const response = await fetch(url);
        const resJson = await response.json();

        setData(resJson);
    };

    useEffect(() => {
        fetchAPI();

        return () => {
            // xử lý khi cpn bị phá hủy - ko tồn tại nữa
            console.log("destroy");

            // clear api, cancel request api, cancel socket
        };
    }, []);

    return data;
};

export default useGetDataAPI;
