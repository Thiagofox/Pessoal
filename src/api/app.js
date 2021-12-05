const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const toDoRouter = require('../routes/toDoRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

app.use('/todo', toDoRouter); 

app.listen(PORT, () => {
  console.log(`Ouvindo na porta-> ${PORT}`);
});
