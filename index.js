const express = require('express');
const connectDB = require('./database/db');
const app = express();
const productRoutes = require('./routes/product.routes.js')
const product = require('./models/product.model.js');
const port = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to Database
connectDB();

app.use('/api/products', productRoutes)

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
