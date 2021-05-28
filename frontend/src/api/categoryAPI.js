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
    }
}

export default CategoryAPI;