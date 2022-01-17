// ***
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/strip");
const cors = require("cors");
// **************************************
// connect with the database
connectDB();

// *********************************
// router
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// ************************************
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing in PORT= ${PORT}`)
);