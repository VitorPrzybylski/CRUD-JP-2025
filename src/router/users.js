import express from 'express'
import ControllerUser from '../controller/users.js'
import authMiddleware from '../middleware/auth.js'

const router =express.Router()

router.post('/login',ControllerUser.Login)
router.get('/users',authMiddleware,ControllerUser.FindAll)//pega todos
router.get('/user/:id',authMiddleware,ControllerUser.FindOne)//pegar um
router.post('/user',ControllerUser.Create)//criar um
router.put('/user/:id',authMiddleware,ControllerUser.Update)//alterar um
router.delete('/user/:id',authMiddleware,ControllerUser.Delete)//deletar um
export default router
