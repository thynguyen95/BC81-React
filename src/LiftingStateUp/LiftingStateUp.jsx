import React, { useState } from "react";
import Card from "./Card";
import DetailProduct from "./DetailProduct";
import Cart from "./Cart";

const LiftingStateUp = () => {
    const data = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./images/imgPhone/vsphone.jpg",
        },
        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./images/imgPhone/meizuphone.jpg",
        },
        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./images/imgPhone/applephone.jpg",
        },
    ];

    const [detailProduct, setDetailProduct] = useState({
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./images/imgPhone/vsphone.jpg",
    });

    // state ở đâu thì hàm xử lý state ở đó
    let [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        console.log("product: ", product);

        // thêm soLuong cho sp
        const productCart = { ...product, soLuong: 1 };

        /*
            Khi thêm sp vào giỏ hàng sẽ có 2 trường hợp:
            + sp mới => soLuong mặc định là 1 => thêm vào mảng 
            + sp đã có trong giỏ hàng => tăng số lượng lên 1 đơn vị
        */

        // kiểm tra xem sp đã có trong giỏ hàng chưa?
        const sp = cart.find((item) => item.maSP === productCart.maSP);

        if (sp) {
            // sp đã có trong giỏ hàng
            sp.soLuong += 1;
        } else {
            // sp chưa có trong giỏ hàng

            cart = [...cart, productCart];
        }

        // cart.push(productCart);

        // clone array thành 1 array với địa chỉ vùng nhớ mới để tránh vấn đề tham chiếu/tham trị
        const newCart = [...cart];

        setCart(newCart);
    };

    const deleteProduct = (id) => {
        console.log("id: ", id);

        // const cartDel = [
        //     ...cart.filter((item) => item.maSP !== id),
        // ];

        const cartDel = [
            ...cart.filter((item) => {
                return item.maSP !== id;
            }),
        ];

        console.log("cartDel: ", cartDel);

        setCart(cartDel);
    };

    const updateQuatity = (id, quatity) => {
        console.log("id: ", id, quatity);

        // tìm sp cần tăng/giảm số lượng
        const sp = cart.find((item) => item.maSP === id);

        if (sp) {
            sp.soLuong += quatity;

            if (sp.soLuong === 0) {
                if (window.confirm("Bạn có muốn xóa sp này không?")) {
                    deleteProduct(id);
                } else {
                    sp.soLuong = 1;
                }

                return;
            }
        }

        //setState để render lại giao diện
        let newCart = [...cart];
        setCart(newCart);
    };

    const renderCard = () => {
        return data.map((item) => {
            return (
                <div className="col-4" key={item.maSP}>
                    <Card
                        detail={item}
                        handleChangeDetail={setDetailProduct}
                        addProductToCart={addProductToCart}
                    />
                </div>
            );
        });
    };

    return (
        <div>
            <h1 className="text-danger">LiftingStateUp</h1>

            <Cart
                listCart={cart}
                delProduct={deleteProduct}
                updateQuatity={updateQuatity}
            />

            <h2>Danh sách sản phẩm</h2>
            <div className="row">{renderCard()}</div>

            <DetailProduct detail={detailProduct} />
        </div>
    );
};

export default LiftingStateUp;
