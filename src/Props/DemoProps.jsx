import React, { useState } from "react";
import CardProduct from "./CardProduct";
import Article from "./Article";
import Modal from "./Modal";
import DemoChangeCar from "../State/DemoChangeCar";
import DemoChangeFontSize from "../State/DemoChangeFontSize";
import DemoCallBack from "./DemoCallBack";
import DemoPropChildren from "./DemoPropChildren";

const DemoProps = () => {
    const DetailArticle = {
        title: "news blog",
        content: "Lorem",
        image: "https://picsum.photos/id/1/200/300",
    };

    const [login, setLogin] = useState(false);

    // login thành công => hiển thị hello user và btn log out
    const renderLogin = () => {
        if (login) {
            return (
                <>
                    <h3>Hello user !!!</h3>
                    <button
                        onClick={() => {
                            setLogin(false);
                        }}
                    >
                        Logout
                    </button>
                </>
            );
        } else {
            return (
                <button
                    className="btn btn-success"
                    onClick={() => {
                        setLogin(true);
                    }}
                >
                    Login
                </button>
            );
        }
    };

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

            <Article content={DetailArticle} />

            <h2 className="mt-5 text-danger">Demo Props JSX</h2>

            {/* <Modal
                titleModal="Change color car"
                contentJSX={<DemoChangeCar />}
            /> */}

            {/* <Modal
                titleModal="Change color car"
                contentJSX={<DemoChangeFontSize />}
            /> */}

            <Modal
                titleModal="Change color car"
                contentJSX={
                    <>
                        <h3>Đây là bài post về lập trình</h3>
                    </>
                }
            />

            <h2 className="mt-5 text-danger">Demo Props Callback</h2>

            <DemoCallBack renderCondition={renderLogin} />

            <h2 className="mt-5 text-danger">Demo Props Children</h2>

            <DemoPropChildren title="Children">
                <h3>Đây là prop children</h3>
                <DemoChangeCar />

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, maxime.
                </p>

                <button className="btn btn-success">click me</button>
            </DemoPropChildren>
        </div>
    );
};

export default DemoProps;
