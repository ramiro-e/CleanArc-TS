import "dotenv/config";
import express from "express";
import cors from "express";
import  productRouter from "./infrastructure/routers/product.router";
import dbInit from "./infrastructure/db/mongo";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/product', productRouter);
dbInit().then();
app.listen(port, () => console.log(`PRODUCT BACKEND - Listo por el puerto ${port}`));