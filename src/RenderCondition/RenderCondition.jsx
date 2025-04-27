import React from "react";

const RenderCondition = () => {
    const isLogin = false;

    const renderLogin = () => {
        if (isLogin) {
            return (
                <div>
                    <h3>hello user !</h3>

                    <ul>
                        <li>Thông tin tài khoản</li>
                        <li>Đổi mật khẩu</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            );
        } else {
            return <button>Đăng nhập</button>;
        }
    };

    return (
        <div>
            <h1 className="text-danger">RenderCondition</h1>

            {/* toán tử 3 ngôi chỉ sử dụng để render những xử lý đơn giản */}
            {/* {isLogin ? <h3>Hello user !</h3> : <button>Đăng nhập</button>} */}

            {renderLogin()}
        </div>
    );
};

export default RenderCondition;
