import LibroModel from "../MODELS/libro.model";

const obtenerLibros = async () => {
    try {
        return await LibroModel.obtenerLibros();
    }
    catch (error: any) {
        throw new Error('Error al obtener los libros' + error.message)
    }

}

const obtenerLibrosPaginados = async (page: number, pageSize: number) => {
    try {
        const limit = pageSize;
        const offset = (page - 1) * pageSize;

        const libros = await LibroModel.obtenerLibrosPaginados(limit, offset);
        return libros;
    }
    catch (error:any) {
        throw new Error('Error al obtener los libros' + error.message);
    }
}

const LibroService = {
    obtenerLibros,
    obtenerLibrosPaginados
}

export default LibroService;