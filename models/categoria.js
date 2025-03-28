import conection from "../utils/database.js";

class Categoria {

  constructor(nombre, descripcion)
  {

    this.nombre = nombre;
    this.descripcion = descripcion;
  }
  async getAll()
  {
    try
    {
        const [rows] = await conection.query("SELECT * FROM categoria");
        return rows;
    }catch (error)
        { throw new Error("Error al obtemer las categorias") }
  }

  }

export default Categoria;