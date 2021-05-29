import ProductAPI from '../api/productAPI';

const Products = {
    //thuộc tính
    async render() {
        try {
            const {
                data: products
            } = await ProductAPI.list();
            const result = products.map(product => {
                return /*html*/ `
                    <a href="/#/products/${product.id}" class="justify-center items-center">
                        <div class="p-4">
                            <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                                <div class="prod-title">
                                    <p class="text-2xl uppercase text-gray-900 font-bold">${product.name}</p>
                                   
                                </div>
    
                                <div class="prod-img">
                                    <img src="${product.image}" class="w-full object-cover object-center">
                                </div>
    
                                <div class="prod-info grid gap-10">
                                    <p class="uppercase text-sm text-gray-400">
                                        ${product.status}
                                    </p>
    
                                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                        <p class="font-bold text-xl">${product.price}</p>
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </a>
                `
            }).join("")

            return /*html*/ `
                <h1>Products page</h1>
                <div class="grid grid-rows-1">
                    <div class="grid grid-cols-4">
                        ${result};
                    </div> 
                </div>
            `
        } catch (error) {
            console.log(error);
        }
        //const { products } = data;
    }
}

export default Products;