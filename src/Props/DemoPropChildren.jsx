import React from "react";

const DemoPropChildren = (props) => {
    // props.children: là nội dung giữa thẻ đóng và mở của cpn

    return (
        <div>
            <h1>DemoPropChildren</h1>

            <h2>{props.title}</h2>

            {props.children}
        </div>
    );
};

export default DemoPropChildren;
