import express from "express";
import products from "./data/Products.js";

const app = express();

//loading product
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
    const product  = products.find((id) => id._id === req.params.id);
    res.json(product);
  });
app.get("/", (req, res) => {
  res.send("Api");
});

app.listen(5000, console.log("server runing on port 5000"));
