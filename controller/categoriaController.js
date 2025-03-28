import Categoria from "../models/categoria.js";

class CategoriaController { 

  static getAllCategoria = async (req, res) => { 
    const objCategoria = new Categoria;
    const categorias = await objCategoria.getAll();
    res.json(categorias);
  }
}

export default CategoriaController;