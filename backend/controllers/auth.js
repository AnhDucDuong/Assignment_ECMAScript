import User from '../models/user';
import formidable from 'formidable';

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
}