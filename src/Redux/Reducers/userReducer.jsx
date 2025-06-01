import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../services/configUrl";
import { TOKEN } from "../../services/constant";

const getUserLoginDefault = () => {
    if (localStorage.getItem("USER_LOGIN")) {
        // login thành công
        const userDefault = JSON.parse(localStorage.getItem("USER_LOGIN"));

        return userDefault;
    }

    // chưa login
    return null;
};

const initialState = {
    userLogin: getUserLoginDefault(),
};

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        setUserLoginAction: (state, action) => {
            state.userLogin = action.payload;
        },
    },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

// chưa login => login
// login thành công  => dispatch action lên redux store để lưu data => dựa vào data để hiển thị chữ login hoặc hello user

//--------------------action async ------------------//
export const loginActionAsync = (data) => {
    //logic
    return async (dispatch) => {
        try {
            //thành công

            const res = await http.post("/api/Users/signin", data, {
                skipLoading: true, // key tùy chỉnh để không bật loading
            });
            console.log("res: ", res);

            // lưu data api trả về vào localStorage
            const token = res.data.content.accessToken;
            localStorage.setItem(TOKEN, token);

            // lưu thông tin tài khoản
            const userLogin = JSON.stringify(res.data.content);
            localStorage.setItem("USER_LOGIN", userLogin);

            // tạo action payload lên store
            const actionPayload = setUserLoginAction(res.data.content);
            dispatch(actionPayload);
        } catch (error) {
            console.log("error: ", error);
        }
    };
};
