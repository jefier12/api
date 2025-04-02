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
  async create() { 

    try {
      const [result] = await conection.query("INSERT INTO categoria(nombre,descripcion) VALUES (?,?)",
        [this.nombre, this, this.descripcion]);
      return {
        id: result.id,
        nombre: this.nombre,
        descripcion: this.descripcion
      };
    } catch (error) {
      throw new Error("Error al crear la categoria");
      
    }
  }
  async update(id){
    try {
      console.log("desde la clase", this.nombre, this.descripcion);
      const [result] = await connection.query(" UPDATE categoria SET nombre = ? descripcion = ? WHERE id = ?",
        [this.nombre,this.descripcion,id]
      )
      if (result.affectedRows === 0) { 
        throw new Error("categoria no encontrada");
      }
      return {id, nombre: this.nombre, descripcion: this.descripcion}
    } catch (error) {
      throw new error("Error al actualizar la categoria");
    }
  }
}
export default Categoria;