import express from 'express'
import router from './router.js'
const PORT = 8080
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.listen(PORT, async () => {
    console.log(`server has been started on port ${PORT}`);
});

// Mongodb connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(router);

