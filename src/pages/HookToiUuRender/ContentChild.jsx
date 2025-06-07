import React, { memo } from "react";

const ContentChild = (props) => {
    console.log("ContentChild render", props);

    return (
        <div>
            <h2 className="text-danger">Content Child</h2>
            <p>Like in child: {props.likeProp.number}</p>
        </div>
    );
};

export default memo(ContentChild);
// dùng memo để tối ưu render
// memo sẽ render lại khi props đầu vào thay đổi
// nhược điểm: so sánh nông
