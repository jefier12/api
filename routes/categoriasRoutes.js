import express from "express";
import CategoriaController from "../controller/categoriaController.js";
import { validarcategoria } from "../midlewares/validarcategoria.js";

const router = express.Router();

router.get("/", CategoriaController.getAllCategoria);

router.post("/",validarcategoria,CategoriaController.createCategoria);

router.put("/:id",CategoriaController.actualizarCategoria);

export default router;