export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase(); // VD: /#/products/1
    const request = url.split("/"); // Tách thành các phần tử mảng ['#', 'products', '1']
    return {
        resource: request['1'],
        id: request['2']
    }
}

export const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}

export const reRender = async (component, position = "") => {
    if (position) {
        $(position).innerHTML = await component.render();
    } else {
        $("#main-content").innerHTML = await component.render();
    }
    await component.afterRender();
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return false
    }
}