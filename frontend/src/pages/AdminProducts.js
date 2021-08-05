import Header_Admin from "../component/Header_Admin"
import ListProducts from "../component/ListProducts"
import SidebarMenu from "../component/SidebarMenu"

const AdminProduct = {
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
                                <h3 class="text-gray-700 text-3xl font-medium">Sản phẩm</h3>

                                <div class="mt-8">
                                    <a href="/#/add-product" class="bg-indigo-600 px-4 py-2 text-white rounded-md">Thêm mới</a>
                                </div>
                                
                                <div class="flex flex-col mt-6">
                                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                        <div id="list-products" class="btn align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                            ${await ListProducts.render()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        `
    },

    async afterRender() {
        return `${await ListProducts.afterRender()}`
    }
}

export default AdminProduct