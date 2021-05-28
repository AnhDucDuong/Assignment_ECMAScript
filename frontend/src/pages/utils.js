export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase(); // VD: /#/products/1
    const request = url.split("/"); // Tách thành các phần tử mảng ['#', 'products', '1']
    return {
        resource: request['1'],
        id: request['2']
    }
}