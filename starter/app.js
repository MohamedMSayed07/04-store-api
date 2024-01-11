require('dotenv').config();
// async erors


const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const productsRoutes = require('./routes/productsRoutes');


const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');


// Middlewares
app.use(express.json());


// Routes
app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Store API</h1><a href="/api/v1/products"> Products route');
});

app.use('/api/v1/products', productsRoutes);
// Product route


app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () =>{
  try {
    // Connect DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening to port ${port}...`))
  } catch(err) {
      console.log(err);
  }
};

start();