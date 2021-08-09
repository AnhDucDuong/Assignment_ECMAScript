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

export const update = (req, res) => {
    const user = User(req.body);
    user.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Update tài khoản không thành công"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json(data)
    })
};

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