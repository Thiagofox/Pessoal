const router = require('express').Router();
const toDoController = require('../controllers/toDoControler');

router.get('/get', toDoController.getAllTasks);
router.get('/get/:id', toDoController.getTaskById);
router.post('/post', toDoController.createTask);
router.put('/edit/:id', toDoController.updateTask);
router.delete('/remove/:id', toDoController.deleteTask);

module.exports = router;