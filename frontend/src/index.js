import AddProduct from './pages/AddProduct';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Header from './component/header';
import Footer from './component/footer';
import {
    parseRequestUrl,
    $
} from './pages/utils';
import Category from './pages/Category';
import AdminProduct from './pages/AdminProducts';

const routes = {
    '/': Home,
    '/products': Products,
    '/products/:id': ProductDetail,
    '/add-product': AddProduct,
    '/error-404': Error404,
    '/category/:id': Category,
    '/listproducts': AdminProduct,
}

const router = async () => {
    const {
        resource,
        id
    } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404;
    $('#main-content').innerHTML = await page.render();
    if (page.afterRender) {
        await page.afterRender()
    }
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);