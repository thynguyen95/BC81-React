import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BaiTap1 from "./BaiTap1/BaiTap1";
import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import Databinding from "./Databinding/Databinding";
import ShoeShopAPI from "./DemoAPI/ShoeShopAPI";
import DemoForm from "./DemoForm/DemoForm";
import DemoFormik from "./DemoForm/DemoFormik";
import Event from "./Event/Event";
import LiftingStateUp from "./LiftingStateUp/LiftingStateUp";
import DemoProps from "./Props/DemoProps";
import ShoeShop from "./Props/ShoeShop/ShoeShop";
import RenderCondition from "./RenderCondition/RenderCondition";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoChangeCar from "./State/DemoChangeCar";
import DemoChangeFontSize from "./State/DemoChangeFontSize";
import DemoState from "./State/DemoState";
import HeaderRouter from "./Components/HeaderRouter";
import Home from "./pages/Home";
import About from "./pages/about";

function App() {
    return (
        // thẻ rỗng hoặc thẻ Fragment
        // <>
        //     {/* <h1 className="text-danger">Hello world !!</h1> */}

        //     {/* cách sử dụng component */}
        //     {/* <Header></Header>
        //     <Header /> */}
        //     {/* <Carousel /> */}

        //     {/* <BaiTap1 /> */}

        //     {/* <Databinding /> */}

        //     {/* <Event /> */}

        //     {/* <RenderCondition /> */}

        //     {/* <DemoState /> */}

        //     {/* <DemoChangeFontSize /> */}

        //     {/* <DemoChangeCar /> */}

        //     {/* <DemoProps /> */}

        //     {/* <RenderWithMap /> */}

        //     {/* <ShoeShop /> */}

        //     {/* <LiftingStateUp /> */}

        //     {/* <ShoeShopAPI /> */}

        //     {/* <DemoForm /> */}

        //     {/* <DemoFormik /> */}

        // </>

        <BrowserRouter>
            <HeaderRouter />

            <Routes>
                {/* cài đặt để mặc định hiển thị page home */}
                <Route path="" element={<Home />} />
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// tạo 1 component Carousel (1 dòng text) và hiển thị lên giao diện
