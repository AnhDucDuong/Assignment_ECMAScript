import express from 'express';
import {
    create,
    list,
    read,
    update,
    productById,
    remove
} from '../controllers/product';
import {
    requireSignin,
    isAdmin,
    isAuth
} from "../controllers/auth";
const router = express.Router();

router.param('productId', productById); //Router lấy Id sản phẩm

router.post('/products', create); //Thêm sản phẩm
router.get('/products/:productId', read); //Chi tiết sản phẩm
router.delete('/products/:productId', remove); //Xóa sản phẩm
router.get('/products', list); //Danh sách sản phẩm
router.put('/products/:productId', update); // Cập nhật sản phẩm


module.exports = router;