const express = require("express");
const dotenv = require("dotenv");
const app = express();
const colors = require("colors");
// const products = require("./data/products");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const errors = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

// app.get("/", (req, res) => {
//   res.send("API is running ...");
// });

app.use("/api/products", productRoutes);

app.use(errors.notFound);
app.use(errors.errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  )
);
