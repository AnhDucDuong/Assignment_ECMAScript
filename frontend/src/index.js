import AddProduct from './pages/AddProduct';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import {
    parseRequestUrl,
    $
} from './pages/utils';
import Category from './pages/Category';
import AdminProduct from './pages/AdminProducts';
import EditProduct from './pages/EditProduct';
import AdminCategory from './pages/AdminCategory';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';
import SearchProducts from './pages/SearchProducts';
import Contact from './pages/Contact';
import Signup from './pages/signup';
import Signout from './component/Signout';
import AdminDashboard from './pages/AdminDashboard';
import UserInfor from './pages/UserInfor';

const routes = {
    '/': Home,
    '/products': Products,
    '/products/:id': ProductDetail,
    '/add-product': AddProduct,
    '/error-404': Error404,
    '/category/:id': Category,
    '/list-products': AdminProduct,
    '/edit-product/:id': EditProduct,
    '/list-categories': AdminCategory,
    '/add-category': AddCategory,
    '/edit-category/:id': EditCategory,
    '/search-products/:id': SearchProducts,
    '/contact': Contact,
    '/signup': Signup,
    '/signout': Signout,
    '/dashboard': AdminDashboard,
    '/user_infor': UserInfor
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