import React from "react";
import CardProduct from "./CardProduct";
import Article from "./Article";

const DemoProps = () => {
    return (
        <div>
            <h1 className="text-danger">DemoProps</h1>

            <h2>Danh sách sản phẩm</h2>

            <div className="row">
                <div className="col-4">
                    <CardProduct
                        name="Kem đánh răng"
                        price="30000"
                        description="Trắng răng"
                    />
                </div>
                <div className="col-4">
                    <CardProduct
                        name="Nước giặt"
                        price="30000"
                        description="Trắng quần áo"
                    />
                </div>
                <div className="col-4">
                    <CardProduct
                        name="Nước rửa chén"
                        price="30000"
                        description="sạch chén dĩa"
                    />
                </div>
            </div>

            <h2 className="mt-5 text-danger">Danh sách bài viết</h2>

            <Article
                content={{
                    title: "news blog",
                    content: "Lorem",
                    image: "https://picsum.photos/id/1/200/300",
                }}
            />
        </div>
    );
};

export default DemoProps;
