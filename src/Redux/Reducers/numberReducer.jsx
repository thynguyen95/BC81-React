export const numberReducer = (number = 200, action) => {
    // console.log("action: ", action);

    // xử lý logic

    const { type, payload } = action;
    if (type === "CHANGE_QUANTITY") {
        number += payload;
    }

    return number;
};
