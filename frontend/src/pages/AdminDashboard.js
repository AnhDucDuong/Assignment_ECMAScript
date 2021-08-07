import Dashboard from "../component/Dashboard"
import Header_Admin from "../component/Header_Admin"
import SidebarMenu from "../component/SidebarMenu"

const AdminDashboard = {
    async render() {
        const user_storage = JSON.parse(localStorage.getItem("user"))
        if (user_storage.role == 0) {
            return /*html*/ `
                <div>
                    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
                    
                    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
                        ${await SidebarMenu.render()}

                        <div class="flex-1 flex flex-col overflow-hidden">
                            ${await Header_Admin.render()}
                            
                            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                                <div class="container mx-auto px-6 py-8">
                                    <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
                                    
                                    <div class="flex flex-col mt-6">
                                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                                            <div id="list-categories" class="btn align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                                                ${await Dashboard.render()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            `
        } else if (user_storage.role == 1) {
            return /*html*/ `
                <p>Không phải tài khoản admin</p>
            `
        }

    },

    async afterRender() {
        return /*html*/ `
            ${await SidebarMenu.afterRender()}
        `
    }
}

export default AdminDashboard;