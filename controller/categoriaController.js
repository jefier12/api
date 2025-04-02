import Categoria from "../models/categoria.js";

class CategoriaController {

  static getAllCategoria = async (req, res) => {
    const objCategoria = new Categoria;
    const categorias = await objCategoria.getAll();
    res.json(categorias);
  };

  static createCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const objCategoria = new Categoria(nombre, descripcion);
      const categoria = await objCategoria.create();
      res.status(201);
      json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static actualizarCategoria = async (req, res) => {
    try {
      const OBJCategoria = new Categoria(nombre, descripcion);
      const categoria = await OBJCategoria.update(id);
      res.json(categoria)
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };

  static actualizarParcialmenteCategoria = async (req, res) => {
    const campos = req.body;
    console.log(Object.keys(campos).length);
    let sql = "";
    for (let cont = 0; cont < campos.lenght; cont++)
    {
      let value   = Object.keys(campos)(cont);

    }
  };

}

export default CategoriaController;