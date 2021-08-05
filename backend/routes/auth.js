import express from 'express';
const router = express.Router();

import {
    signup,
    signin,
    signout
} from '../controllers/auth';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;