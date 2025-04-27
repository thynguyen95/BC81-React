import "./App.css";
import BaiTap1 from "./BaiTap1/BaiTap1";
import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import Databinding from "./Databinding/Databinding";
import Event from "./Event/Event";
import DemoProps from "./Props/DemoProps";
import RenderCondition from "./RenderCondition/RenderCondition";
import DemoChangeCar from "./State/DemoChangeCar";
import DemoChangeFontSize from "./State/DemoChangeFontSize";
import DemoState from "./State/DemoState";

function App() {
    return (
        // thẻ rỗng hoặc thẻ Fragment
        <>
            <h1 className="text-danger">Hello world !!</h1>

            {/* cách sử dụng component */}
            {/* <Header></Header> */}
            {/* <Header />
            <Carousel />

            <BaiTap1 /> */}

            {/* <Databinding /> */}

            {/* <Event /> */}

            {/* <RenderCondition /> */}

            {/* <DemoState /> */}

            {/* <DemoChangeFontSize /> */}

            {/* <DemoChangeCar /> */}

            <DemoProps />
        </>
    );
}

export default App;

// tạo 1 component Carousel (1 dòng text) và hiển thị lên giao diện
