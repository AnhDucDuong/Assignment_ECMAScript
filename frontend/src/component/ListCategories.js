import CategoryAPI from "../api/categoryAPI";
import {
    reRender,
    $
} from "../pages/utils"

const ListCategories = {
    async render() {
        const {
            data: categories
        } = await CategoryAPI.list();
        return /*html*/ `
            <table class="min-w-full">
                <thead>
                    <tr>
                        <th
                            class="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            </th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Tên danh mục</th>
                        <th
                            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            </th>
                    </tr>
                </thead>

                <tbody class="bg-white">
                    ${categories.map((category, index) => {
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
                                            <div class="text-sm leading-5 text-gray-500">${category.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                    <a href="/#/edit-category/${category.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <button data-id="${category.id}" class="btn ml-6 text-red-600 hover:text-red-700 font-semibold focus:outline-none">Remove</button>
                                </td>
                            </tr>
                        `
                    }).join("")}
                </tbody>
            </table>                                
        `
    },

    async afterRender() {
        const btns = $('#list-categories .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const question = confirm("Bạn có chắc chắn muốn xóa không? ");
                if (question) {
                    await CategoryAPI.remove(id);
                    reRender(ListCategories, '#list-categories');
                }
            })
        });
    }
}

export default ListCategories;