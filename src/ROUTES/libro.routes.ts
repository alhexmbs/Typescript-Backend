import { Router } from "express";
import LibroController from "../CONTROLLERS/libro.controller";

const libroRouter = Router();

libroRouter.get('/libros', LibroController.obtenerLibros);

export default libroRouter;