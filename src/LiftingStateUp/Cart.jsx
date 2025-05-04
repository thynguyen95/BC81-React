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

    return (
        <div>
            <h1>Danh sách giỏ hàng </h1>

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
        </div>
    );
};

export default Cart;
