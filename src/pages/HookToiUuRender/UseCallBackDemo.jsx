import React, { useCallback, useState } from "react";
import Comment from "./Comment";

const UseCallBackDemo = () => {
    const [like, setLike] = useState(1);

    const renderLike = () => {
        return `Bạn đã nhấn ${like} like`;
    };

    console.log("UseCallBackDemo render");

    const callbackRenderLike = useCallback(renderLike, [like]);

    return (
        <div>
            <h1>UseCallBack Demo</h1>

            <button
                className="btn btn-success"
                onClick={() => {
                    setLike(like + 1);
                }}
            >
                Like
            </button>

            <p>Like: {like}</p>

            <Comment renderLike={callbackRenderLike} />
        </div>
    );
};

export default UseCallBackDemo;
