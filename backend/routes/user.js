import express from 'express';
const router = express.Router();
import {
    userById,
    read
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
router.get('/user/:userId', requireSignin, isAuth, read);


module.exports = router;