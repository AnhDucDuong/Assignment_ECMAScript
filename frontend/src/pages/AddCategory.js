import CategoryAPI from "../api/categoryAPI";
import {
    v4 as uuidv4
} from 'uuid';
import SidebarMenu from "../component/SidebarMenu";
import {
    $
} from './utils';
import Header_Admin from "../component/Header_Admin";

const AddCategory = {
    async render() {
        return /*html*/ `
            <div>
                <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
                
                <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                    ${await SidebarMenu.render()}

                    <div class="flex-1 flex flex-col overflow-hidden">
                        ${await Header_Admin.render()}    

                        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                            <div class="container mx-auto px-6 py-8">
                                <h3 class="text-gray-700 text-3xl font-medium">Thêm danh mục</h3>

                                <form id="form-add" enctype="multipart/form-data" class="mt-10 ml-6">
                                    <h5 class="mb-2 text-xl font-semibold">Tên danh mục:</h5>
                                    <input class="w-1/3 h-8 mb-6 focus:outline-none border border-gray-400 rounded-sm pl-2" type="text" placeholder="Tên danh mục" id="category-name">
                                    
                                    <div class="mt-4">
                                        <input type="submit" value="Cập nhật" class="bg-indigo-600 px-4 py-2 text-white rounded-md">
                                        <input type="reset" value="Nhập lại" class="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">
                                        <a href="/#/list-categories" class="bg-indigo-600 px-4 py-2 text-white rounded-md ml-2">Danh sách</a>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        `
    },

    afterRender() {
        $('#form-add').addEventListener('submit', async e => {
            e.preventDefault();
            const newCategory = {
                name: $('#category-name').value,
            }
            //console.log(newCategory.name);

            const {
                data: categories
            } = await CategoryAPI.list();
            //console.log(categories)

            categories.map((category) => {
                if (category.name == newCategory.name) {
                    alert("Sản phẩm đã tồn tại")
                    throw '';
                }
            })

            if (newCategory.name.length == 0) {
                alert("Không được để trống dữ liệu")
            } else {
                await CategoryAPI.create(newCategory);
                window.location.hash = '/list-categories';
            }
        })
    }
}

export default AddCategory;