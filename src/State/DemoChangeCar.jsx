import React, { useState } from "react";

const DemoChangeCar = () => {
    const [car, setCar] = useState("./images/CarBasic/products/black-car.jpg");

    const handleChangeCar = (color) => {
        let image = `./images/CarBasic/products/${color}-car.jpg`;

        setCar(image);
    };

    return (
        <div>
            <h1 className="text-danger">DemoChangeCar</h1>

            <div className="row">
                <div className="col-6">
                    <img src={car} alt="" width={"100%"} />
                </div>
                <div className="col-6">
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            // setCar("./images/CarBasic/products/red-car.jpg");
                            handleChangeCar("red");
                        }}
                    >
                        Red car
                    </button>
                    <button
                        className="btn"
                        style={{ background: "steelblue" }}
                        onClick={() => {
                            // setCar("./images/CarBasic/products/steel-car.jpg");

                            handleChangeCar("steel");
                        }}
                    >
                        Steel car
                    </button>
                    <button
                        className="btn bg-black text-white"
                        onClick={() => {
                            handleChangeCar("black");
                        }}
                    >
                        Black car
                    </button>
                    <button
                        className="btn text-white"
                        style={{ background: "gray" }}
                        onClick={() => {
                            handleChangeCar("silver");
                        }}
                    >
                        Silver car
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DemoChangeCar;
