import express from 'express'
import ControllerUser from '../controller/users.js'

const router =express.Router()
router.get('/users',ControllerUser.FindAll)//pega todos
router.get('/user/:index',ControllerUser.FindOne)//pegar um
router.post('/user',ControllerUser.Create)//criar um
router.put('/user/:index',ControllerUser.Update)//alterar um
router.delete('/user/:index',ControllerUser.Delete)//deletar um
export default router
