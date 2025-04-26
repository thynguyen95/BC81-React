import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

const BaiTap1 = () => {
    return (
        <div>
            <h1>BaiTap1</h1>

            <Header />

            <div className="row">
                <Navigation />
                <Content />
            </div>

            {/* <Footer /> */}

            <Footer />
        </div>
    );
};

export default BaiTap1;
