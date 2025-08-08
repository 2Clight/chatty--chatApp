import express from 'express';
import cors from 'cors';

import {getUsersForSidebar, getMessages, sendMessage } from '../controllers/message.controller.js';        
import { protectRoute } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get('/user', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);




router.use(cors({ origin: "http://localhost:5173", credentials: true }));

// your routes here


export default router;