import React from "react";
import style from "./styles.module.css";

const Databinding = () => {
    const name = "BC81";

    const student = {
        id: 1,
        name: "Nguyễn Văn A",
        avatar: "https://picsum.photos/id/1/200/300",
    };

    // student.avatar = "https://picsum.photos/id/1/200/300"

    const styles = {
        width: "300px",
        background: "yellow",
    };

    const renderCard = () => {
        return (
            <div className="card" style={styles}>
                <img src={student.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{student.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        );
    };

    // renderCard();

    return (
        <div>
            <h1 className="text-danger">Databinding</h1>

            {/* cú pháp binding : {} */}
            <p className={style.text}>{name}</p>

            {/* <div className="card" style={{ width: "300px" }}>
                <img src={student.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{student.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div> */}

            {renderCard()}
        </div>
    );
};

export default Databinding;
