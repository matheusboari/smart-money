import express from 'express'
import UsersController from '../controllers/UsersController'
const router = express.Router()

router.post('/register', UsersController.register)
router.post('/wallet/create', UsersController.createWallet)
router.post('/login', UsersController.login)
router.delete('/delete/:id', UsersController.deleteAccount)
router.put('/update', UsersController.update)
router.put('/delete/wallet', UsersController.deleteWallet)

export default router