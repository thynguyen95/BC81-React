import React from "react";
import PhoneCard from "./PhoneCard";

const RenderWithMap = () => {
    const data = [
        {
            id: 1,
            name: "iphone",
            price: 3000,
            image: "https://picsum.photos/200",
        },
        {
            id: 2,
            name: "oppe",
            price: 3000,
            image: "https://picsum.photos/200",
        },
        {
            id: 3,
            name: "samsung",
            price: 3000,
            image: "https://picsum.photos/200",
        },
        {
            id: 4,
            name: "xiaomi",
            price: 3000,
            image: "https://picsum.photos/200",
        },
    ];

    // + thuộc tính key để theo dõi từng phần tử trong danh sách.Nếu không có key, react sẽ render lại toàn bộ danh sách, gây tốn tài nguyên
    // + Giá trị của key nên là duy nhất trong phạm vi danh sách hiện tại
    const renderListPhone = () => {
        const arrJSX = data.map((item) => {
            return (
                <div className="col-4 my-2" key={item.id}>
                    <PhoneCard detail={item} />
                </div>
            );
        });

        return arrJSX;
    };

    return (
        <div>
            <h1 className="text-danger">RenderWithMap</h1>

            {/* <div className="row">
                <div className="col-4">
                    <PhoneCard />
                </div>
                <div className="col-4">
                    <PhoneCard />
                </div>
                <div className="col-4">
                    <PhoneCard />
                </div>
            </div> */}

            {/* <div className="row">
                {data.map((item) => {
                    return (
                        <div className="col-4 my-2" key={item.id}>
                            <PhoneCard detail={item} />
                        </div>
                    );
                })}
            </div> */}

            <div className="row">{renderListPhone()}</div>
        </div>
    );
};

export default RenderWithMap;
