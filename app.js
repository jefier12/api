import bodyParser from "body-parser";
import express from "express";

import categorias from "./routes/categoriasRoutes.js";

const app = express();


app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use("/categoria", categorias);

app.listen(3000, () => { 
  console.log("hola nodemon");
});