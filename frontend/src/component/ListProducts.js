import ProductAPI from "../api/productAPI"
import {
    reRender,
    $
} from "../pages/utils"

const ListProducts = {
    async render() {
        const {
            data: products
        } = await ProductAPI.list();
        return /*html*/ `
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th
                            class="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            </th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Tên hàng hóa</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Ảnh sản phẩm</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Đơn giá</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Số lượng</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Trạng thái</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            </th>
                    </tr>
                </thead>

                <tbody class="bg-white">
                    ${products.map((product, index) => {
                        return /*html*/`
                            <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm leading-5 text-gray-500">${index}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm leading-5 text-gray-500">${product.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm leading-5 font-medium text-gray-900"><img class="h-30 w-40" src="${product.image}" alt=""></div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm leading-5 text-gray-500">${product.price}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm leading-5 text-gray-500">${product.quantity}</div>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-sm leading-5 text-gray-500">${product.status}</div>
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                    <a href="/#/product/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <button data-id="${product.id}" class="btn ml-6 text-red-600 hover:text-red-700 font-semibold focus:outline-none">Remove</button>
                                </td>
                            </tr>
                        `
                    }).join("")}
                </tbody>
            </table>                                
        `
    },

    async afterRender() {
        const btns = $('#list-products .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm("Bạn có chắc chắn muốn xóa không? ");
                if (question) {
                    await ProductAPI.remove(id);
                    reRender(ListProducts, '#list-products');
                }
            })
        });
    }
}

export default ListProducts;