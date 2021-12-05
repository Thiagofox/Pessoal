const toDoService = require('../services/toDoService');

async function getAllTasks(_req, res) {
  try {
    const data = await toDoService.getAllTasks();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar os dados' });
  }
}

async function getTaskById(req, res) {
  try {
    const { id } = req.params;
    const data = await toDoService.getTaskById(id);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar os dados' });
  }
}

async function createTask(req, res) {
  try {
    const taskObj = req.body;
    const data = await toDoService.createTask(taskObj);
    if (data.message) {
      return res.status(400).json(data);
    }
    return res.status(201).json({ message: 'Task criada com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar os dados' });
  }
}

async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const taskObj = req.body;
    const data = await toDoService.updateTask(taskObj, id);
    
    if (data.message) {
      return res.status(400).json(data);
    }
    return res.status(200).json({ message: 'Task editada com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao editar os dados' });
  }
}

async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const data = await toDoService.deleteTask(id); 
    if (data.message) {
      return res.status(400).json(data);
    }
    return res.status(200).json({ message: 'Task deletada com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro a deletar os dados' });
  }
}
  
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
