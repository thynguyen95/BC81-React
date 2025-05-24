import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeFontsizeRedux = () => {
    const fontSize = useSelector((state) => state.fontSizeReducer);
    console.log("fontSize: ", fontSize);

    const dispatch = useDispatch();

    const handleChangeFontSize = (fSize) => {
        console.log("fSize: ", fSize);

        const action = {
            type: "CHANGE_FSIZE",
            payload: fSize,
        };

        dispatch(action);
    };

    return (
        <div>
            <h1 className="text-danger">DemoChangeFontSize Redux</h1>

            <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet.</p>

            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-success mx-2"
                    onClick={() => {
                        handleChangeFontSize(-5);
                    }}
                >
                    zoom in
                </button>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        handleChangeFontSize(5);
                    }}
                >
                    zoom out
                </button>
            </div>
        </div>
    );
};

export default ChangeFontsizeRedux;
