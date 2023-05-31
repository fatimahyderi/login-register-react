import express from 'express'
import { registeruser } from '../controller/controller.js'

const router = express.Router();

// router.get('/', "homeView");

router.get('/register', registeruser)

export { router };