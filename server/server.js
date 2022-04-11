import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
const app = express();
connectDatabase();
app.use(cors());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server started on port ${PORT}`));
