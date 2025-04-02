export const validarcategoria = (req,res,next) => { 

  const { nombre, descripcion } = req.body;

  if (nombre || nombre.trim() === "")
  { 
    return res.status(400).json({ mensaje: "el nombre en la categoria es obligatoria"})
  }
  if (descripcion || descripcion.trim() === "")
  { 
    return res.status(400).json({ mensaje: "la descripcion en la categoria es obligatoria"})
  }

  next();
}