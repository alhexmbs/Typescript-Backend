import { Router } from "express";
import LibroController from "../CONTROLLERS/libro.controller";

const libroRouter = Router();

libroRouter.get('/buscarLibros', LibroController.obtenerLibros);
libroRouter.get('/buscarLibrosPaginados', LibroController.obtenerLibrosPaginados);

export default libroRouter;