import express from 'express';
import { getAllTodos, createTodo } from '../controllers/todoController.mjs';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);

export default router;
