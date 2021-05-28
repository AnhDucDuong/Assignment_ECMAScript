import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import {
    parseRequestUrl
} from './pages/utils';


const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}

const routes = {
    '/': Home,
    '/products': Products,
    '/products/:id': ProductDetail
}

const router = async () => {
    const {
        resource,
        id
    } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404;
    $('#main-content').innerHTML = await page.render();
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);