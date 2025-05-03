import React from "react";

const ShoeCard = (props) => {
    console.log("props: ", props);

    const { detail } = props;
    return (
        <div className="card">
            <img src={detail.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{detail.name}</h5>
                <p className="card-text">{detail.description}</p>
                <a href="#" className="btn btn-primary">
                    {detail.price}
                </a>
            </div>
        </div>
    );
};

export default ShoeCard;
