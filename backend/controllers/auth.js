import User from '../models/user';
import formidable from 'formidable';
import jwt from 'jsonwebtoken'

const expressJwt = require('express-jwt');

export const signup = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtension = true;
    form.parse(req, (err, field) => {
        if (err) {
            return res.status(400).json({
                error: "Đăng ký không thành công"
            })
        }

        const {
            name,
            email,
            hashed_password
        } = field;
        //console.log('controler', hashed_password)

        if (!name | !email) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }

        let user = new User(field);
        //console.log('user controler', user)
        user.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Đăng ký tài khoản không thành công"
                })
            }
            user.salt = undefined;
            user.hashed_password = undefined;
            res.json(data)
        })
    });
};

export const signin = (req, res) => {
    const {
        email,
        password
    } = req.body;

    User.findOne({
        email
    }, (error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: 'Email không tồn tại'
            })
        }

        // nếu người dùng được tìm thấy, hãy đảm bảo email và mật khẩu khớp nhau
        // tạo phương thức xác thực trong mô hình người dùng
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email và mật khẩu không khớp'
            })
        }

        // Tự động tạo ra một mã cùng với user và mã secret
        const token = jwt.sign({
            _id: user._id
        }, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with  
        res.cookie('t', token, {
            expire: new Date() + 9999
        });

        // trả về phản hồi với người dùng và mã thông báo cho ứng dụng khách giao diện người dùng
        const {
            _id,
            name,
            email,
            role
        } = user;

        return res.json({
            token,
            user: {
                _id,
                email,
                name,
                role
            }
        })
    })
};

export const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
});

export const isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denined"
        })
    }
    next();
}