import React from "react";

const Event = () => {
    const handleLike = (e) => {
        console.log("click me handleLike", e);
        e.target.style.background = "red";
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
        </div>
    );
};

export default Event;
