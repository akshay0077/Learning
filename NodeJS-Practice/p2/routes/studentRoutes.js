const express = require('express');
import studentModels from '../models/studentModels.js'

const router = express.Router();

router.post('/students', async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const user = new User({ name, email, age });
    await user.save();
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get('/students', async (req, res) => {
  try {
    const users = await studentModels.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const user = await studentModels.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete('/students/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await studentModels.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default studentRoutes;