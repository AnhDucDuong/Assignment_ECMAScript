import SidebarMenu from "../component/SidebarMenu";
import ProductAPI from "../api/productAPI"
import firebase from '../firebase'
import {
    parseRequestUrl,
    $
} from "./utils";
import CategoryAPI from "../api/categoryAPI";
import Header_Admin from "../component/Header_Admin";

const EditProduct = {
    async render() {
        const user_storage = JSON.parse(localStorage.getItem("user"));

        if (user_storage.role == 0) {
            const {
                id
            } = parseRequestUrl(); //Lấy id trên url
            const {
                data: product
            } = await ProductAPI.read(id);

            const {
                data: categories
            } = await CategoryAPI.list();
            //console.log(categories);
            const result = categories.map(category => {
                return /*html*/ `
                    <option value="${category.id}" ${product.cate_id === category.id ? `selected`: ''} >${category.name}</option>
                `
            }).join("")

            return /*html*/ `
                <div>
                    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
                    
                    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                        ${await SidebarMenu.render()}
    
                        <div class="flex-1 flex flex-col overflow-hidden">
                            ${await Header_Admin.render()}
    
                            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                                <div class="container mx-auto px-6 py-8">
                                    <h3 class="text-gray-700 text-3xl font-medium">Sửa sản phẩm</h3>
    
                                    <form id="form-update-product" enctype="multipart/form-data" class="mt-10 ml-6">
                                        <div class="grid grid-cols-2">
                                            <div class="">
                                            <h5 class="mb-2 text-xl font-semibold">Tên sản phẩm:</h5>
                                            <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="text" placeholder="Tên sản phẩm" id="product-name" value="${product.name}">
                                                <h5 class="mb-2 text-xl font-semibold">Danh mục:</h5>
                                                
                                                <select class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" name="ma_loai" id="cate-id">
                                                    ${result}
                                                </select>
                                                <h5 class="mb-2 text-xl font-semibold">Đơn giá:</h5>
                                                <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="number" name="don_gia" id="price" value="${product.price}">
                                                <h5 class="mb-2 text-xl font-semibold">Số lượng:</h5>
                                                <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="number" name="so_luong" id="quantity" value="${product.quantity}">
                                            </div>
    
                                            <div class="">
                                                <h5 class="mb-2 text-xl font-semibold">Ảnh sản phẩm:</h5>
                                                <input class="w-4/5 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" type="file" id="product-image" value="${product.image}">
                                                <h5 class="mb-2 text-xl font-semibold">Mô tả ngắn</h5>
                                                <textarea class="w-4/5 h-32 mb-4 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" name="mo_ta_ngan" id = "description_short" cols="63" rows="5">${product.description_short}</textarea>
                                                <h5 class="mb-2 text-xl font-semibold">Mô tả dài</h5>
                                                <textarea class="w-4/5 h-32 mb-4 focus:outline-none border border-gray-400 rounded-sm pl-2 bg-white" name="mo_ta_dai" id = "description_long" cols="63" rows="5">${product.description_long}</textarea>
                                            </div>
                                        </div>
    
                                        <div class="mt-4">
                                            <input type="submit" value="Cập nhật" class="bg-indigo-600 px-4 py-2 text-white rounded-md">
                                            <a href="/#/list-products" class="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">Danh sách</a>
                                        </div>
                                    </form>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            `
        } else if (user_storage.role == 1) {
            return /*html*/ `
                <p>Không phải tài khoản quản trị</p>
            `
        }

    },

    async afterRender() {
        const {
            id
        } = parseRequestUrl
            (); //Lấy id trên url
        const {
            data: product
        } = await ProductAPI.read(id);

        $('#form-update-product').addEventListener('submit', async (e) => {
            e.preventDefault();
            if ($('#product-image').files.length == 0) {
                const newProduct = {
                    ...product,
                    name: $('#product-name').value,
                    price: $('#price').value,
                    quantity: $('#quantity').value,
                    description_short: $('#description_short').value,
                    description_long: $('#description_long').value,
                    cate_id: $('#cate-id').value
                };
                const {
                    data: products
                } = await ProductAPI.list();

                products.map((product) => {
                    if (product.name == newProduct.name) {
                        alert("Sản phẩm đã tồn tại")
                        throw '';
                    }
                })

                if (newProduct.name.length == 0) {
                    alert("Không được để trống dữ liệu")
                } else {
                    await ProductAPI.update(id, newProduct);
                    window.location.hash = '/list-products';
                }

            } else {
                const productImage = $('#product-image').files[0];
                let storageRef = firebase.storage().ref(`images/${productImage.name}`);
                storageRef.put(productImage).then(function () {
                    console.log('Upload thành công!');
                    storageRef.getDownloadURL().then(async (url) => {
                        const newProduct = {
                            ...product,
                            name: $('#product-name').value,
                            image: url,
                            price: $('#price').value,
                            quantity: $('#quantity').value,
                            description_short: $('#description_short').value,
                            description_long: $('#description_long').value,
                            cate_id: $('#cate-id').value
                        };
                        const {
                            data: products
                        } = await ProductAPI.list();

                        products.map((product) => {
                            if (product.name == newProduct.name) {
                                alert("Sản phẩm đã tồn tại")
                                throw '';
                            }
                        })

                        if (newProduct.name.length == 0) {
                            alert("Không được để trống dữ liệu")
                        } else {
                            await ProductAPI.update(id, newProduct);
                            window.location.hash = '/list-products';
                        }
                    })
                })
            }

        })
    }
};

export default EditProduct;