const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/products", productsRouter);
app.use("/api/categories", categoriesRouter);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});