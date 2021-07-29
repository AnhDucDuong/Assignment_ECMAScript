import UserAPI from "../api/userAPI";
import Header from "../component/header";
import {
    $
} from './utils';

const Signup = {
    async render() {
        return /*html*/ `
            ${await Header.render()}
            
            <div class="flex justify-center my-2 mx-4 md:mx-0">
                <form id="form-signup" enctype="multipart/form-data" class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
                    <div class="text-center my-10">
                        <div class="flex items-center justify-center">
                            <svg fill="none" viewBox="0 0 24 24" class="w-12 h-12 text-blue-500" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                        <h2 class="text-4xl tracking-tight">
                            Đăng ký tài khoản
                        </h2>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6 mt-6">
                        <div class="w-full md:w-full px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
                            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='text' id="name_signup" required>
                        </div>
                        <div class="w-full md:w-full px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email address</label>
                            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' id="email_signup" required>
                        </div>
                        <div class="w-full md:w-full px-3 mb-6">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Password</label>
                            <input class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' id="password_signup" required>
                        </div>
                        <div class="w-full md:w-full px-3 mb-6">
                            <input type="submit" value="Sign up" class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                        </div>
                    </div>
                </form>
            </div>
        `
    },

    afterRender() {
        $('#form-signup').addEventListener('submit', async e => {
            e.preventDefault();
            const newUser = {
                name: $('#name_signup').value,
                email: $('#email_signup').value,
                password: $('#password_signup').value,
            }
            //console.log(newUser);

            await UserAPI.signup(newUser);
            window.location.hash = '/';
            /*
            const {
                data: users
            } = await User.list();
            //console.log(categories)

            users.map((user) => {
                if (user.email == newUser.email) {
                    alert("Email đã được sử dụng")
                    throw '';
                }
            })

            if (newUser.name.length == 0) {
                alert("Không được để trống dữ liệu")
            } else {
                await UserAPI.create(newUser);
                window.location.hash = '/';
            }*/
        })
    }
}
export default Signup;