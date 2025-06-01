import { http } from "./configUrl";

export const productServices = {
    getAllProduct: async () => {
        const response = await http.get("/api/Product");

        return response.data.content;
    },
    getProductDetail: (id) => {
        return http.post(`/api/Product/${id}`);
    },
};

// http.get ...
// productServices.getAllProduct().then().catch()
