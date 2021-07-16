import Category from '../models/category'
import formidable from 'formidable'
import _ from 'lodash'

export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không thêm được danh mục"
            })
        }
        res.json(data);
    })
}

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: "Không tìm thấy danh mục"
            })
        }
        req.category = category;
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.category);
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deleteCategory) => {
        if (err) {
            return res.status.json({
                error: "Xóa danh mục không thành công"
            })
        }
        res.json({
            category: deleteCategory,
            message: "Danh mục đã được xóa thành công"
        })
    })


}

export const list = (req, res) => {
    Category.find((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không tồn tại danh mục"
            })
        }
        res.json(data)
    })
}

export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không thể sửa danh mục"
            })
        }
        res.json(data);
    });
}