import express from 'express';
import {
    create,
    list,
    read,
    update,
    categoryById,
    remove
} from '../controllers/category';
import {
    requireSignin,
    isAuth,
    isAdmin
} from '../controllers/auth'
const router = express.Router();

router.param('categoryId', categoryById);

router.post('/category', create); //Thêm danh mục
router.get('/category/:categoryId', read); //Chi tiết danh mục
router.delete('/category/:categoryId', remove); //Xóa danh mục
router.get('/category', list); //Danh sách danh mục
router.put('/category/:categoryId', update); //Cập nhật danh mục

module.exports = router;