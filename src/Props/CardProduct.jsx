import React from "react";

const CardProduct = (prop) => {
    console.log("prop: ", prop); // {}
    // prop: đại diện cho các giá trị nhận vào từ propName của component

    // <Component propName="value" propName2="value" propName3="value" />

    // prop không thể gán lại giá trị(readonly)
    // prop.name ='abac' // lỗi

    const { name, price, description } = prop;

    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default CardProduct;
