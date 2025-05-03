import React from "react";

const DemoCallBack = (props) => {
    return (
        <div>
            <h1 className="text-danger">DemoCallBack</h1>

            {props.renderCondition()}
        </div>
    );
};

export default DemoCallBack;
