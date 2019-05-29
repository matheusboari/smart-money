import express from 'express'
import UsersController from '../controllers/UsersController'
const router = express.Router()

router.post('/register', UsersController.register)
router.post('/wallet/create', UsersController.createWallet)
router.post('/login', UsersController.login)
router.put('/update', UsersController.update)

export default router