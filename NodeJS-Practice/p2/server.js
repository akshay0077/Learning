import express from 'express';
import bodyParser from 'body-parser';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use(bodyParser.json());

app.use('/', studentRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});