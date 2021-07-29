import User from '../models/user';

export const userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Tài khoản không tồn tại'
            })
        }
        req.profile = user;
        next()
    })
}

export const read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;

    return res.json(req.profile);
}

export const list = (req, res) => {
    User.find((err, data) => {
        if (err) {
            return res.statu(400).json({
                err: "Không lấy được danh sách Users"
            })
        }
        res.json(data);
    })
}