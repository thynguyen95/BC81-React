import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeNumberRedux = () => {
    // const [number, setNumber] = useState(0)

    // useSelector: dùng để lấy state từ redux về
    // state: đại diện cho object reducer ở store => cần lấy state của reducer nào thì . tên của reducer đó
    const number = useSelector((state) => state.numberReducer);
    console.log("number: ", number);

    const dispatch = useDispatch();

    const handleChangeNumber = (quantity) => {
        // để đưa dữ liệu lên store thì dùng useDispatch

        // dispatch sẽ nhận 1 action

        // tạo action

        const action = {
            type: "CHANGE_QUANTITY",
            payload: quantity,
        };

        // dùng dispatch để gửi action lên store
        dispatch(action);
    };

    return (
        <div>
            <h1 className="text-danger">Demo change number redux</h1>

            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        handleChangeNumber(-1);
                    }}
                >
                    -
                </button>

                <p className="mx-3 display-1">Number: {number}</p>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        handleChangeNumber(1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ChangeNumberRedux;
