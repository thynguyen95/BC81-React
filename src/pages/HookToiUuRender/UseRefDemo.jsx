import React, { useRef, useState } from "react";
import ContentChild from "./ContentChild";

const UseRefDemo = () => {
    const [input, setInput] = useState("");
    const [like, setLike] = useState({ number: 1 });

    console.log("UseRefDemo render");

    const valueInputRef = useRef();
    return (
        <div>
            <h1 className="text-center text-danger">UseRef Demo</h1>

            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        // setInput(e.target.value);

                        valueInputRef.current = e.target.value;
                    }}
                />
                <button
                    className="btn btn-success"
                    onClick={() => {
                        console.log("inputRef", valueInputRef);
                    }}
                >
                    Submit
                </button>
            </div>

            <button
                onClick={() => {
                    // const newLike = like + 1;
                    // setLike(newLike);

                    // khi dùng array, object nên clone ra 1 địa chỉ ô nhớ mới vì memo sử dụng shallow compare
                    let newLike = { ...like };
                    newLike.number += 1;
                    setLike(newLike);
                }}
            >
                Like
            </button>

            <p>Like: {like.number}</p>

            <ContentChild likeProp={like} />
        </div>
    );
};

export default UseRefDemo;
