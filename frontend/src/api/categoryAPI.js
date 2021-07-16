import {
    axiosClient
} from "./axiosClient";

const CategoryAPI = {
    categoryById() {
        const url = `categoryId`;
        return axiosClient.param(url)
    },

    create(category) {
        const url = `/category`;
        return axiosClient.post(url, category)
    },

    list() {
        const url = `/category`;
        return axiosClient.get(url)
    },

    read(categoryId) {
        const url = `/category/${categoryId}`;
        return axiosClient.get(url)
    },

    remove(categoryId) {
        const url = `/category/${categoryId}`;
        return axiosClient.delete(url)
    },

    update(categoryId, data) {
        const url = `/category/${categoryId}`;
        return axiosClient.put(url, data)
    }
}

export default CategoryAPI;