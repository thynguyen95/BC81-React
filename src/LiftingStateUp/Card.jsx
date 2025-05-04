import React from "react";

const Card = (props) => {
    console.log("props: ", props); // {}
    const { detail, handleChangeDetail, addProductToCart } = props;

    return (
        <div className="card">
            <img
                src={props.detail.hinhAnh}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{detail.tenSP}</h5>
                <p className="card-text">{detail.giaBan}</p>
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={(e) => {
                        // chặn sự kiện mặc định của thẻ
                        e.preventDefault();
                        handleChangeDetail(detail);
                    }}
                >
                    Xem chi tiết
                </a>

                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        addProductToCart(detail);
                    }}
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    );
};

export default Card;
