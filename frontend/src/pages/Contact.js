import Footer from "../component/footer";
import Header from "../component/header";

const Contact = {
    async render() {
        return `
            ${await Header.render()}
            <section class="mx-auto bg-white">
            <!-- Breadcrumbs -->
            <div class="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center space-x-2 text-gray-400 text-sm">
                <a href="/" class="hover:underline hover:text-gray-600">Trang Chủ</a>
                <span>
                    <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </span>
                <span>Liên Hệ</span>
                </div>
            </div>
            <!-- ./ Breadcrumbs -->
            <section class="relative bg-Content_Head">
                <h1 class="text-5xl text-black text-center pt-12 container mx-auto">LIÊN HỆ</h1>
                <div class="container mx-auto px-32 pt-12">
                    <h1 class="font-TextContact text-2xl text-black">
                        <span class="border-b-4 border-borderOrange pb-2">Thông tin liên hệ</span>
                    </h1>

                    <div class="mt-10 grid grid-cols-2 items-center pb-12 border-b border-black">
                        <div class="grid grid-rows-4 gap-4 justify-between h-96">
                            <div class="flex items-center border border-black px-6">
                            <svg class="w-10 h-10 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                                <div>
                                    <h2 class="tracking-wider font-bold text-lg">Address</h2>
                                    <p class="font-TextContact font-bold text-base">
                                        8A3 ngõ 7 Kim Mã Thượng, Liễu Giai, Hà Nội
                                    </p>
                                </div>
                            </div>
                            <!--Address-->
                            <div class="flex items-center border border-black px-6 py-2">
                            <svg class="w-10 h-10 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                                <div>
                                    <h2 class="tracking-wider font-bold text-lg">Phone</h2>
                                    <p class="font-TextContact font-bold text-base">0966.592.374</p>
                                </div>
                            </div>
                            <!--Phone-->
                            <div class="flex items-center border border-black px-6 py-2">
                            <svg class="w-10 h-10 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                                <div>
                                    <h2 class="tracking-wider font-bold text-lg">Email</h2>
                                    <p class="font-TextContact font-bold text-base">tuonggoonline@gmail.com</p>
                                </div>
                            </div>
                            <!--Email-->
                            <div class="flex items-center border border-black px-6 py-2">
                                <svg class="svg-inline--fa fa-facebook-square fa-w-14 text-black fa-2x mr-4 w-10 h-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z">
                                    </path>
                                </svg>
                                <!-- <i class="fab fa-facebook-square text-yellow-900 fa-2x mr-4"></i> Font Awesome fontawesome.com -->
                                <div>
                                    <h2 class="tracking-wider font-bold text-lg">Facebook</h2>
                                    <a class="font-TextContact font-bold text-base" href="">
                                        https://www.facebook.com/noithatfanda/
                                    </a>
                                </div>
                            </div>
                            <!--Facebook-->
                        </div>

                        <div class="mx-auto">
                            <img src="<?=$CONTENT_URL?>/images/logo2.png" alt="">
                        </div>

                    </div>
                </div>
            </section>

            <section class="bg-Background_Color">
                <div class="container mx-auto py-16 px-32">
                    <h1 class="font-TextContact text-2xl text-black mb-12"><span class="border-b-4 border-borderOrange pb-2">MA</span><span>P</span></h1>
                    <div class="shadow-3xl mb-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.1171300351293!2d105.782314970451!3d21.18662436027265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313501e2a6d66a4d%3A0xab2c326e64f47081!2sMe%20Linh%20Plaza!5e0!3m2!1sen!2s!4v1615020048030!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                    </div>
                </div>
            </section>

            ${await Footer.render()}
        `
    }
}

export default Contact;