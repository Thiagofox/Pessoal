const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

async function getAllTasks() {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').find().toArray();
  return data;
}

async function getTaskById(id) {
  if (!ObjectId.isValid(id)) return null;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return data;
}

async function createTask(taskObj) {
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').insertOne(taskObj);
  return data;
}

async function updateTask(taskObj, id) {
  if (!ObjectId.isValid(id)) return null;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').updateOne(
    { _id: ObjectId(id) },
    { $set: taskObj },
    );
  return data;
}

async function deleteTask(id) {
  if (!ObjectId.isValid(id)) return null;
  const db = await mongoConnection.connection();
  const data = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return data;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};