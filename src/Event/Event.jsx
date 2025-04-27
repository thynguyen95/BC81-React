import React from "react";

const Event = () => {
    const handleLike = (e) => {
        console.log("click me handleLike", e);
        e.target.style.background = "red";
    };

    const handlePage = (number, e) => {
        console.log("number:", number, e);

        e.target.style.background = "yellow";
    };

    return (
        <div>
            <h1 className="text-danger">Event</h1>

            {/* event nhận vào 1 callback function  */}
            <button
                onClick={(e) => {
                    console.log("click me", e);

                    // code logic
                }}
            >
                Click me !
            </button>

            {/* Khi gọi hàm trong onClick sẽ không có () như ở html vì react sẽ hiểu là cú pháp databinding => hàm sẽ chạy khi vừa load */}
            <button onClick={handleLike}>Click me call method !</button>

            {/* khi cần truyền tham số vào hàm callback thì mượn anonymous function */}
            {/* closure function */}
            <div className="mt-5">
                <button
                    className="btn btn-success mx-2"
                    onClick={(e) => {
                        console.log("event:", e);
                        handlePage(1, e);
                    }}
                >
                    1
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={(e) => {
                        handlePage(2, e);
                    }}
                >
                    2
                </button>
                <button
                    className="btn btn-success mx-2"
                    onClick={(e) => {
                        handlePage(3, e);
                    }}
                >
                    3
                </button>
            </div>
        </div>
    );
};

export default Event;
