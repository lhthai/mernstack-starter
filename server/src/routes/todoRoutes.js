import express from 'express'
const router = express.Router()
import * as TodoController from '../controllers/todo.controller'

router.get('/', TodoController.getAll)
router.get('/:id', TodoController.get)
router.post('/', TodoController.create)
router.put('/:id', TodoController.update)
router.delete('/:id', TodoController.remove)

export default router