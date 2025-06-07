import React from "react";

const Comment = (props) => {
    console.log("Comment render", props);

    return (
        <div>
            <h1>Comment</h1>

            {props.renderLike()}
        </div>
    );
};

export default Comment;
