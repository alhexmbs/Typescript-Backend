import LibroModel from "../MODELS/libro.model";

const obtenerLibros = async () => {
    try {
        return await LibroModel.obtenerLibros();
    }
    catch (error: any) {
        throw new Error('Error al obtener los libros' + error.message)
    }

};

const obtenerLibrosPaginados = async (page: number, pageSize: number) => {
    try {
        const limit = pageSize;
        const offset = (page - 1) * pageSize;

        const libros = await LibroModel.obtenerLibrosPaginados(limit, offset);
        return libros;
    }
    catch (error: any) {
        throw new Error('Error al obtener los libros' + error.message);
    }
};

const obtenerLibroPorId = async (id_libro: number) => {
    try {
        return await LibroModel.obtenerLibroPorId(id_libro);
    }
    catch (error: any) {
        throw new Error('Error al obtener el libro' + error.message);
    }
};

const insertarLibro = async (titulo: string, autor: string, anio: number) => {
    try {
        return await LibroModel.insertarLibro(titulo, autor, anio);
    }
    catch (error: any) {
        throw new Error('Error al insertar el libro' + error.message);
    }
};

const modificarLibro = async (id_libro: number, titulo: string, autor: string, anio: number) => {
    try {
        return await LibroModel.modificarLibro(id_libro, titulo, autor, anio);
    }
    catch (error: any) {
        throw new Error('Error al modificar el libro' + error.message);
    }
};

const eliminarLibro = async (id_libro: number) => {
    try {
        return await LibroModel.eliminarLibro(id_libro);
    }
    catch (error: any) {
        throw new Error('Error al eliminar el libro' + error.message);
    }
}

const LibroService = {
    obtenerLibros,
    obtenerLibrosPaginados,
    obtenerLibroPorId,
    insertarLibro,
    modificarLibro,
    eliminarLibro
}

export default LibroService;