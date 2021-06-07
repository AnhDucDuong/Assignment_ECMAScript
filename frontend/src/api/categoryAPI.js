import {
    axiosClient
} from "./axiosClient";

const CategoryAPI = {
    list() {
        const url = `/categories`;
        return axiosClient.get(url)
    },

    read(cate_id) {
        const url = `/categories/${cate_id}`;
        return axiosClient.get(url)
    },

    remove(cate_id) {
        const url = `/categories/${cate_id}`;
        return axiosClient.delete(url)
    },

    add(product) {
        const url = `/categories`;
        return axiosClient.post(url, product)
    },

    update(cate_id, data) {
        const url = `/categories/${cate_id}`;
        return axiosClient.put(url, data)
    }
}

export default CategoryAPI;