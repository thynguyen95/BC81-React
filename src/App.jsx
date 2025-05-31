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
import HomeMasterPage from "./TemplateLayout/HomeMasterPage";
import Product from "./pages/Product";
import AdminMasterPage from "./TemplateLayout/AdminMasterPage";
import ProductManagement from "./pages/Admin/ProductManagement";
import MovieManagement from "./pages/Admin/MovieManagement";
import NotFound from "./pages/NotFound";
import DetailProduct from "./pages/DetailProduct";
import Search from "./pages/Search";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProduct from "./pages/ProductManagement/EditProduct";
import HandleProduct from "./pages/ProductManagement/HandleProduct";
import { store } from "./Redux/store";
import ChangeNumberRedux from "./pages/DemoRedux/ChangeNumberRedux";
import { Provider } from "react-redux";
import ChangeFontsizeRedux from "./pages/DemoRedux/ChangeFontsizeRedux";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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

        <Provider store={store}>
            <BrowserRouter>
                {/* <HeaderRouter /> */}

                <Routes>
                    {/* Route basic */}
                    {/* cài đặt để mặc định hiển thị page home */}
                    {/* <Route path="" element={<Home />} />
                <Route index element={<Home />} />

                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} /> */}
                    <Route path="product" element={<Product />} />

                    {/* Route nested */}
                    <Route path="/" element={<HomeMasterPage />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="detail">
                            <Route path=":prodId" element={<DetailProduct />} />
                        </Route>

                        <Route path="search" element={<Search />} />

                        <Route
                            path="change-number-redux"
                            element={<ChangeNumberRedux />}
                        />

                        <Route
                            path="change-fontsize-redux"
                            element={<ChangeFontsizeRedux />}
                        />

                        <Route path="cart" element={<Cart />} />

                        <Route path="register" element={<Register />} />

                        <Route path="login" element={<Login />} />

                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="/admin" element={<AdminMasterPage />}>
                        <Route index element={<ProductManagement />} />
                        <Route
                            path="product-management"
                            element={<ProductManagement />}
                        />
                        <Route
                            path="movie-management"
                            element={<MovieManagement />}
                        />

                        <Route path="add-product" element={<AddProduct />} />
                        <Route
                            path="edit-product/:id"
                            element={<EditProduct />}
                        />

                        <Route path="product" element={<HandleProduct />} />
                        <Route path="product/:id" element={<HandleProduct />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

// tạo 1 component Carousel (1 dòng text) và hiển thị lên giao diện
