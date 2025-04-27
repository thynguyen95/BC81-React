import React, { useState } from "react";

const DemoChangeFontSize = () => {
    // step1: xác định state
    // step2: xác định kiểu dữ liệu của state
    // step3: render state lên giao diện
    // step4: xử lý setState
    const [fontSize, setFontSize] = useState(20);

    return (
        <div>
            <h1 className="text-danger">DemoChangeFontSize</h1>

            <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet.</p>

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-success mx-2"
                    onClick={() => {
                        setFontSize(fontSize + 5);
                    }}
                >
                    zoom in
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        setFontSize(fontSize - 5);
                    }}
                >
                    zoom out
                </button>
            </div>
        </div>
    );
};

export default DemoChangeFontSize;
