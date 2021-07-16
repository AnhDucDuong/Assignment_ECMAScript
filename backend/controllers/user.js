import formidable from 'formidable'
import User from '../models/user'

/*export const signup = (req, res) => {
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

        if (!name | !email | !hashed_password) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let user = new User(field);
        user.save((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Đăng ký tài khoản không thành công"
                })
            }
            res.json(data)
        })
    });
}*/