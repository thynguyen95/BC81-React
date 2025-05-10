import React from "react";

const Cart = (props) => {
    const { listCart, delProduct, updateQuatity } = props;
    console.log("listCart: ", listCart);

    const renderCart = () => {
        return listCart.map((product) => {
            return (
                <tr>
                    <th className="" scope="col">
                        {product.maSP}
                    </th>
                    <td>
                        <img src={product.hinhAnh} alt="" width={100} />
                    </td>
                    <td>{product.tenSP}</td>
                    <td>
                        <div className="flex align-items-center">
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    updateQuatity(product.maSP, -1);
                                }}
                            >
                                -
                            </button>
                            <span className="display-5 mx-2">
                                {product.soLuong}
                            </span>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    updateQuatity(product.maSP, 1);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </td>
                    <td>{product.giaBan.toLocaleString()}</td>
                    <td>
                        {(product.soLuong * product.giaBan).toLocaleString()}
                    </td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                delProduct(product.maSP);
                            }}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        });
    };

    const handleTotalMoney = () => {
        if (listCart.length === 0) {
            return 0;
        } else {
            const totalCart = listCart.reduce((total, item, index) => {
                total += item.giaBan * item.soLuong;

                return total;
            }, 0);

            return totalCart.toLocaleString();
        }
    };

    // tính tổng số lượng sản phẩm trong giỏ hàng
    const countProduct = () => {
        // cách 1: dùng for
        // let total = 0;
        // for (let item of listCart) {
        //     console.log("item: ", item);
        //     // total = total + item.soLuong;
        //     total += item.soLuong;
        // }
        // return total;

        // cách 2: reduce
        const totalProduct = listCart.reduce((total, item, index) => {
            total += item.soLuong;

            return total;
        }, 0);

        // const totalProduct = listCart.reduce(
        //     (total, item, index) => (total += item.soLuong),
        //     0
        // );

        return totalProduct;
    };

    return (
        <div>
            <h1>
                Danh sách giỏ hàng{" "}
                <span className="text-danger">({countProduct()})</span>
            </h1>

            <table className="table table-striped text-start">
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình Ảnh</th>
                        <th>Tên SP</th>
                        <th>Số Lượng</th>
                        <th>Đơn Giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{renderCart()}</tbody>
            </table>

            <div className="text-end text-danger display-4 mb-5">
                Tổng tiền: {handleTotalMoney()}
            </div>
        </div>
    );
};

export default Cart;
