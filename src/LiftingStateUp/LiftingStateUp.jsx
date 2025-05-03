import React from "react";
import Card from "./Card";

const LiftingStateUp = () => {
    const data = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./images/imgPhone/vsphone.jpg",
        },
        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./images/imgPhone/meizuphone.jpg",
        },
        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./images/imgPhone/applephone.jpg",
        },
    ];

    const renderCard = () => {
        return data.map((item) => {
            return (
                <div className="col-4" key={item.maSP}>
                    <Card detail={item} />
                </div>
            );
        });
    };

    return (
        <div>
            <h1 className="text-danger">LiftingStateUp</h1>

            <h2>Danh sách sản phẩm</h2>
            <div className="row">{renderCard()}</div>
        </div>
    );
};

export default LiftingStateUp;
