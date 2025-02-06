import { Router } from "express";
import LibroController from "../CONTROLLERS/libro.controller.js";

const libroRouter = Router();

libroRouter.get('/buscar', LibroController.obtenerLibros);
libroRouter.get('/buscarPaginados', LibroController.obtenerLibrosPaginados);
libroRouter.get('/buscarPorId/:id_libro', LibroController.obtenerLibroPorId);

libroRouter.post('/insertar', LibroController.insertarLibro);
libroRouter.put('/modificar', LibroController.modificarLibro);
libroRouter.delete('/eliminar/:id_libro', LibroController.eliminarLibro);

export default libroRouter;