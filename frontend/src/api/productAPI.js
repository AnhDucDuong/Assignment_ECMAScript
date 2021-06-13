import {
    axiosClient
} from "./axiosClient";

const ProductAPI = {
    list() {
        const url = `/products`;
        return axiosClient.get(url)
    },

    search(id) {
        const url = `/products?name_like=${id}`;
        return axiosClient.get(url)
    },

    read(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    },

    add(product) {
        const url = `/products`;
        return axiosClient.post(url, product)
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    },

    update(id, data) {
        const url = `/products/${id}`;
        return axiosClient.put(url, data)
    }
}

export default ProductAPI;