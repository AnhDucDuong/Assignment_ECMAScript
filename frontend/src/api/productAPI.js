import {
    axiosClient
} from "./axiosClient";

const ProductAPI = {
    productById() {
        const url = `productId`;
        return axiosClient.param(url)
    },

    list() {
        const url = `/products`;
        return axiosClient.get(url)
    },

    search(productId) {
        const url = `/products?name_like=${productId}`;
        return axiosClient.get(url)
    },

    read(productId) {
        const url = `/products/${productId}`;
        return axiosClient.get(url)
    },

    create(product) {
        const url = `/products`;
        return axiosClient.post(url, product)
    },

    remove(productId) {
        const url = `/products/${productId}`;
        return axiosClient.delete(url)
    },

    update(productId, data) {
        const url = `/products/${productId}`;
        return axiosClient.put(url, data)
    }
}

export default ProductAPI;