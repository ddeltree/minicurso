import { Router } from 'express'
import {
  getTasks,
  postTask,
  patchTask,
  deleteTask
} from '../controllers/taskController.js'

const router = Router()

router.get('/', getTasks)
router.post('/', postTask)
router.patch('/:id', patchTask)
router.delete('/:id', deleteTask)

export default router
