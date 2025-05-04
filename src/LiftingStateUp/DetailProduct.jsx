import React from "react";

const DetailProduct = (props) => {
    console.log("props: ", props);
    const { detail } = props;

    // props.detail = 'abdhdj' // ko chạy => props không thể gán giá trị ngược lại

    return (
        <div className="row justify-content-between mt-5">
            <div className="col-3 detail__img">
                <h2>{detail.tenSP}</h2>

                <img src={detail.hinhAnh} alt="" className="w-100" />
            </div>

            <div className="col-8 detail__content">
                <h2>Thông số kỹ thuật</h2>

                <table className="table table-striped text-start">
                    <tbody>
                        <tr>
                            <th className="" scope="col">
                                Màn hình
                            </th>
                            <td>{detail.manHinh}</td>
                        </tr>
                        <tr>
                            <th scope="col">Hệ điều hành</th>
                            <td>{detail.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <th scope="col">Camera trước</th>
                            <td>{detail.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <th scope="col">Camera sau</th>
                            <td>{detail.cameraSau}</td>
                        </tr>
                        <tr>
                            <th scope="col">Ram</th>
                            <td>{detail.ram}</td>
                        </tr>
                        <tr>
                            <th scope="col">Rom</th>
                            <td>{detail.rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DetailProduct;
