import React from "react";

const PhoneCard = (props) => {
    const { detail } = props;

    return (
        <div className="card">
            <img src={detail.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{detail.name}</h5>
                <p className="card-text">{detail.price}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default PhoneCard;
