import React from "react";
import Card from "./Card";

const Content = () => {
    return (
        <div className="bg-primary col-8">
            <h2>Content</h2>

            <div className="row">
                <div className="col-4">
                    <Card />
                </div>
                <div className="col-4">
                    <Card />
                </div>
                <div className="col-4">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Content;
