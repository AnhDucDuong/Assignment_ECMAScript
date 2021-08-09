import express from 'express';
const router = express.Router();
import {
    userById,
    read,
    list,
    update
} from '../controllers/user';
import {
    requireSignin,
    isAdmin,
    isAuth
} from "../controllers/auth";


router.param('userId', userById);

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
});
router.get('/user', list); //Danh sách users
router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', update); //Update user


module.exports = router;