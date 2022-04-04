import express from "express";
import Product from "../Models/ProductModel.js";

import asyncHandler from "express-async-handler";
const productRoute = express.Router();

//Get all products
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

//get a single product
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default productRoute;
