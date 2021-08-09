import UserAPI from "../api/userAPI";
import Header from "../component/header";
import {
    $
} from './utils';

const UserInfor = {
    async render() {
        const user_storage = JSON.parse(localStorage.getItem("user"));
        //console.log(user_storage)
        return /*html*/ `
            ${await Header.render()}
            
            <section class="py-6">
                <!-- Breadcrumbs -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center space-x-2 text-gray-400 text-sm">
                        <a href="#" class="hover:underline hover:text-gray-600">Trang Chủ</a>
                        <span>
                            <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <span>Thông Tin Tài Khoản</span>
                    </div>
                </div>
                <!-- ./ Breadcrumbs -->

                <div class="px-4 sm:px-6 lg:px-8 mt-6 flex justify-center">
                    <div class="flex flex-col pr-6">
                        <img class="rounded-full w-40 h-40 border border-gray-400" src="https://s3.amazonaws.com/gazelle.cdn.yolocare.com/sites/367/2018/02/12135521/yolo-icons-160x160-nursemale2.png" alt="">
                        <span class="mx-auto mt-4 mb-6 font-Playfair text-xl font-medium">Name User</span>

                        <a class="flex items-center mt-4 py-2 text-black mx-auto"
                            href="#/user_infor">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>

                            <span class="pl-1 text-lg font-Playfair hover:text-red-600">Tài Khoản Của Tôi</span>
                        </a>
                        <!---->

                        <a class="flex items-center mt-4 py-2 text-black mx-auto" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>

                            <span class="pl-1 text-lg font-Playfair hover:text-red-600">Đơn Hàng Của Tôi</span>
                        </a>
                        <!---->
                    </div>

                    <div class="mx-6 bg-gray-100 border border-gray-200 shadow-xl">
                        <div class="p-8">
                            <h1 class="font-Playfair text-2xl font-medium border-b border-yellow-500">Tài Khoản Của Tôi</h1>
                            <form class="flex" action="" method="POST"
                                enctype="multipart/form-data">
                                <div class="max-w-5xl py-2 px-8 mt-5">
                                    <div class="flex items-center">
                                        <label class="w-48 block text-gray-600 mb-1 text-base">Tên Khách Hàng</label>
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text"
                                            name="name" value="${user_storage.name}" placeholder="Họ và Tên">
                                    </div>
                                    <div class="flex items-center mt-3">
                                        <label class="w-48 block text-gray-600 mb-1 text-base">Email</label>
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="" name="email"
                                            value="${user_storage.email}" placeholder="Email">
                                    </div>

                                    <div class="flex items-center mt-3">
                                        <label class="w-48 block text-gray-600 mb-1 text-base">Số điện thoại</label>
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number"
                                            name="phone" value="0966592374" placeholder="Số điện thoại">
                                    </div>
                                    <div class="flex items-center mt-3">
                                        <label class="w-32 block text-gray-600 mb-1 text-base">Giới tính</label>
                                        <div>
                                            <label class="text-base text-gray-600"><input class="mr-2" name="gender" value="1"
                                                    checked type="radio">Nam</label>
                                            <label class="text-base text-gray-600 ml-5"><input class="mr-2" name="gender"
                                                    value="2" type="radio">Nữ</label>
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-3">
                                        <label class="w-48 block text-gray-600 mb-1 text-base">Ngày sinh</label>
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="birth"
                                            value="<?=$user['birth']?>" type="date" required="">
                                    </div>
                                    
                                    <div class="mt-3">
                                        <label class=" block text-gray-600 mb-1 text-base">Địa Chỉ</label>
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="city"
                                            value="" type="text" required="" placeholder="Tỉnh/Thành Phố">
                                    </div>
                                    <div class="mt-2">
                                        <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" name="district"
                                            value="" type="text" required="" placeholder="Quận/Huyện">
                                    </div>
                                    <div class="mt-2">
                                        <input class="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded" name="commune"
                                            value="" type="text" required="" placeholder="Phường/Xã">
                                    </div>
                                    <div class="mt-2">
                                        <input class="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded" name="street"
                                            value="" type="text" required=""
                                            placeholder="Số nhà, Tên Đường...">
                                    </div>

                                    <div class="py-1">
                                        <span class="text-red-700"><?= $error?></span> 
                                    </div>

                                    <button type="submit"
                                        class="w-36 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none">Lưu</button>
                                    <a href=""><button type="button"
                                            class="w-36 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:bg-indigo-700 focus:outline-none">Đổi
                                            Mật Khẩu</button></a>
                                </div>

                                <div class="max-w-2xl py-2 px-8 mt-5 flex flex-col items-center">
                                    <label class="block text-gray-600 mb-4 text-2xl font-Playfair">Đổi Avatar</label>
                                    <form runat="server">
                                        <img id="blah" class="rounded-full w-40 h-40 mb-4"
                                            src="<?=$CONTENT_URL?>/images/avatar.jpg" alt="">
                                        <input type="file" id="imgInp" name="up_hinh">
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `
    },

    afterRender() {}
}
export default UserInfor;