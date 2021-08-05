import {
    isAuthenticated
} from "../pages/utils.js";

const Cart = {
    render() {
        if (isAuthenticated() == false) {
            return /*html*/ `
                <div class="absolute right-0 bg-gray-300 w-max border border-gray-400 shadow-2xl mt-14 opacity-0 invisible group-hover:opacity-95 group-hover:visible group-hover:mt-0 transition-all duration-500">
                    <div class="bg-white py-4 px-6 rounded shadow-2xl text-gray-800">
                        <h1 class="text-center font-normal text-xl">Giỏ Hàng</h1>
                        <svg class="mx-auto" width="120" height="3" viewBox="0 0 799 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.000226236 2H799" stroke="#E2B65C" stroke-width="7" stroke-linejoin="round"></path>
                        </svg>
                        <h1 class="text-center font-normal text-2xl my-10">Không có sản phẩm nào trong giỏ</h1>
                    </div>
                </div>
            `
        } else {
            return /*html*/ `
                <div class="absolute right-0 bg-gray-300 w-max border border-gray-400 shadow-2xl mt-14 opacity-0 invisible group-hover:opacity-95 group-hover:visible group-hover:mt-0 transition-all duration-500">
                    <div class="bg-white py-4 rounded shadow-2xl text-gray-800">
                        <h1 class="text-center font-normal text-xl">Giỏ Hàng</h1>
                        <svg class="mx-auto" width="120" height="3" viewBox="0 0 799 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.000226236 2H799" stroke="#E2B65C" stroke-width="7" stroke-linejoin="round"></path>
                        </svg>
                        <h1 class="text-center font-normal text-2xl my-10">Không có sản phẩm nào trong giỏ</h1>
                        <svg class="mx-auto px-0" width="full" height="3" viewBox="0 0 799 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.000226236 2H799" stroke="#E2B65C" stroke-width="7" stroke-linejoin="round"></path>
                        </svg>

                        <div class="px-5 mx-auto mt-4 flex justify-between">
                            <p class="text-lg font-normal text-gray-700">Tổng Giá: 5.000.000 Đồng</p>
                            <div class="">
                                <a href="#"><button type="button" class="w-40 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none">Mua Hàng</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

export default Cart;