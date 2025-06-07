import { http } from "./configUrl";

export const userServices = {
    getAllUsers: async () => {
        const response = await http.get("/api/Users/getAll");

        return response.data.content;
    },
    registerUser: async (userRegister) => {
        const response = await http.post("/api/Users/signup", userRegister);

        return response.data.content;
    },
};
