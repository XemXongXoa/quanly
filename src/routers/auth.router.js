import express from 'express';
import {userController} from '../controllers/user.controller.js';
import { tokenMiddleware } from '../middlewares/token.middleware.js';
const router = express.Router();

router.post('/login', userController.login);
router.get('/info',tokenMiddleware, userController.info);
export default router;
