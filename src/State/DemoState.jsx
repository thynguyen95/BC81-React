import React, { useState } from "react";

// useState là hook
// hook là function mà react cung cấp, chỉ sử dụng được trong component của react

const DemoState = () => {
    // useState: nhận vào 1 giá trị default
    // number(tham số đầu tiên của array):
    //      + đại diện cho giá trị default
    //      + giá trị sau khi state thay đổi
    // setNumber(tham số thứ 2 của array): là 1 function,
    //      + nhận vào 1 giá trị mới
    //      + set giá trị đó cho tham số thứ nhất
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1 className="text-danger">DemoState</h1>

            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        setNumber(number - 2);
                    }}
                >
                    -
                </button>

                <p className="mx-3 display-1">Number: {number}</p>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        let newNumber = number + 5;
                        setNumber(newNumber);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default DemoState;

// tuple
// lần 1:
// number(state) = 0(default )

// click + => state number = 1;
// click + => state number = 2;
