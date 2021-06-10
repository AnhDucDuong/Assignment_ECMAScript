import {
    axiosClient
} from "./axiosClient";

const CategoryAPI = {
    list() {
        const url = `/categories`;
        return axiosClient.get(url)
    },

    read(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url)
    },

    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url)
    },

    add(category) {
        const url = `/categories`;
        return axiosClient.post(url, category)
    },

    update(id, data) {
        const url = `/categories/${id}`;
        return axiosClient.put(url, data)
    }
}

export default CategoryAPI;