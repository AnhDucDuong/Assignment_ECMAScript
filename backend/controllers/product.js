import Product from '../models/product'
import formidable from 'formidable'
import fs from 'fs'
import _ from 'lodash'

export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Thêm sản phẩm không thành công"
            })
        }
        const {
            name,
            description,
            price
        } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = new Product(fields);

        //1kb = 1000 bit
        //1mb = 100000 bit
        if (files.photo) {
            if (files.photo.size > 200000) {
                res.status(400).json({
                    error: "Bạn nên upload ảnh dưới 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Không thêm được sản phẩm"
                })
            }
            res.json(data)
        })
    });
}

export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}

export const read = (req, res) => {
    return res.json(req.product);
}

export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deleteProduct) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            product: deleteProduct,
            message: "Sản phẩm đã được xóa thành công"
        })
    });
}

export const list = (req, res) => {
    Product.find()
        .select("-photo")
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Không có sản phẩm nào"
                })
            }
            res.json(data)
        })
}

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Sửa sản phẩm không thành công"
            })
        }
        const {
            name,
            description,
            price
        } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        //let product = new Product(fields);
        let product = req.product;
        product = _.assignIn(product, fields);
        //1kb = 1000 bit
        //1mb = 100000 bit
        if (files.photo) {
            if (files.photo.size > 100000) {
                res.status(400).json({
                    error: "Bạn nên upload ảnh dưới 1mb"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.path;
        }

        product.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Không thể sửa sản phẩm"
                })
            }
            res.json(data)
        })
    });
}