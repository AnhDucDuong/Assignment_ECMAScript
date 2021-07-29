import {
    axiosClient
} from "./axiosClient";

const UserAPI = {
    userById() {
        const url = `userId`;
        return axiosClient.param(url)
    },

    signup(user) {
        const url = `/signup`;
        return axiosClient.post(url, user)
    },

    signin(user) {
        const url = `/signin`;
        return axiosClient.post(url, user)
    },

    list() {
        const url = `/user`;
        return axiosClient.get(url)
    },

    read(userId) {
        const url = `/user/${userId}`;
        return axiosClient.get(url)
    },

    remove(userId) {
        const url = `/user/${userId}`;
        return axiosClient.delete(url)
    },

    update(userId, data) {
        const url = `/user/${userId}`;
        return axiosClient.put(url, data)
    }
}

export default UserAPI;