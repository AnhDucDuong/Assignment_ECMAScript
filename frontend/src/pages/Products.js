import ProductAPI from '../api/productAPI';
import Footer from '../component/footer';
import Header from '../component/header';

const Products = {
    //thuộc tính
    async render() {
        try {
            const {
                data: products
            } = await ProductAPI.list();
            const result = products.map(product => {
                return /*html*/ `
                    <a href="/#/products/${product._id}" class="justify-center items-center">
                        <div class="p-4">
                            <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                                <div class="prod-title pb-2">
                                    <p class="text-2xl text-gray-900">${product.name}</p>
                                </div>
    
                                <div class="prod-img">
                                    <img src="${product.image}" class="w-full object-cover object-center">
                                </div>
    
                                <div class="prod-info grid gap-10">
                                    <div class="flex flex-col md:flex-col justify-between items-center text-gray-900">
                                        <p class="font-bold text-xl py-4">Giá: ${product.price} VNĐ</p>
                                        <button class="w-full px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Thêm vào giỏ</button>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </a>
                `
            }).join("")

            return /*html*/ `
                ${await Header.render()}
                <img src="https://firebasestorage.googleapis.com/v0/b/ecmascript-7a6e3.appspot.com/o/images%2FCity%20Night%20Lights%20Tumblr%20Banner.png?alt=media&token=3ee4096b-04af-4c9e-bd00-d09fc6d85213" class="">
                
                <div class="flex justify-between px-24 pt-10">
                    <div></div>
                    <div class="relative inline-flex">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                        <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option>Sắp xếp theo</option>
                            <option>Giá tăng dần</option>
                            <option>Giá giảm dần</option>
                            <option>Từ A đến Z</option>
                            <option>Từ Z đến A</option>
                        </select>   
                    </div>
                </div>
                
                
                <div class="flex mx-auto px-20">
                    <div class="grid grid-rows-1">
                        <div class="grid grid-cols-4">
                            ${result};
                        </div> 
                    </div>
                </div>
                ${await Footer.render()}
            `
        } catch (error) {
            console.log(error);
        }
        //const { products } = data;
    },

    async afterRender() {
        return `${await Header.afterRender()}`
    }
}

export default Products;