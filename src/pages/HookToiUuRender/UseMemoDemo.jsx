import React, { useMemo, useState } from "react";
import TableCart from "./TableCart";

const UseMemoDemo = () => {
    const [like, setLike] = useState(1);

    const cart = [
        { id: 1, name: "product1", price: 1000 },
        { id: 2, name: "product2", price: 1000 },
        { id: 3, name: "product3", price: 1000 },
    ];

    // useMemo: dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi thì giá trị đó mới tạo lại
    const memoCart = useMemo(() => cart, []);

    console.log("UseMemoDemo render");

    return (
        <div>
            <h1>UseMemo Demo</h1>

            <button
                onClick={() => {
                    let newLike = like + 1;
                    setLike(newLike);
                }}
            >
                like
            </button>

            <p>Like: {like}</p>

            <TableCart cart={memoCart} />
        </div>
    );
};

export default UseMemoDemo;
