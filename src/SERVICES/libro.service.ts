import LibroModel from "../MODELS/libro.model";

const obtenerLibros = async () => {
    try {
        return await LibroModel.obtenerLibros();
    }
    catch (error: any) {
        throw new Error('Error al obtener los libros' + error.message)
    }

}

const LibroService = {
    obtenerLibros
}

export default LibroService;