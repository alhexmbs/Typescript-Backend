import { error } from "console";
import LibroService from "../SERVICES/libro.service";

const obtenerLibros = async (req: any, res: any) => {
    try {
        let libros = await LibroService.obtenerLibros();

        if (libros.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No se encontraron libros'
            });
        }

        //console.log('Lista de libros controller: ', libros);
        return res.status(200).json({
            status: true,
            message: 'Libros obtenidos exitosamente',
            data: libros
        });
    }

    catch (error: any) {
        console.error('Error al obtener libros:', error.message);
        return res.status(500).json({
            status: false,
            message: 'Error del servidor al obtener libros'
        });
    }
};

const obtenerLibrosPaginados = async (req: any, res: any) => {
    try {
        //Convierte el req.query.page a entero. page es el nombre de la variable en la URL
        const page = parseInt(req.query.page, 10) || 1; // Página actual

        //Convierte el req.query.pageSize a entero. pageSize es el nombre de la variable en la URL
        const pageSize = parseInt(req.query.pageSize, 10) || 10; // Tamaño de la página

        const libros = await LibroService.obtenerLibrosPaginados(page, pageSize);

        if (libros.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'No se encontraron libros'
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Libros obtenidos exitosamente',
            data: libros
        });
    } catch (error) {
        console.error('Error al obtener libros:', error);
        return res.status(500).json({
            status: false,
            message: 'Error al obtener libros',
        });
    }
};

const obtenerLibroPorId = async (req: any, res: any) => {
    try {

        //Aquí se recibe un stirng:
        let id_libro = req.params.id_libro;

        //Parseando a number:
        id_libro = Number(id_libro);

        //console.log(typeof id_libro);
        const libro = await LibroService.obtenerLibroPorId(id_libro);

        if (!libro) {
            return res.status(404).json({
                status: false,
                message: 'Libro no encontrado'
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Libro obtenido exitosamente',
            data: libro
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Error al obtener el libro'
        });
    }
};

const insertarLibro = async (req: any, res: any) => {
    try {
        const { titulo, autor, anio } = req.body;

        if (!titulo || !autor || !anio) {
            return res.status(400).json({
                status: false,
                message: 'Todos los campos (título, autor, año) son obligatorios'
            });
        }

        let libro = await LibroService.insertarLibro(titulo, autor, anio);

        return res.status(201).json({
            status: true,
            message: 'Libro insertado exitosamente',
            data: libro
        })
    }
    catch (error: any) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Error al obtener el libro'
        });
    }
}

const modificarLibro = async (req: any, res: any) => {
    try {
        let { id_libro, titulo, autor, anio } = req.body;

        if (!id_libro || !titulo || !autor || !anio) {
            return res.status(400).json({
                status: false,
                message: 'El ID del libro, título, autor y año son obligatorios'
            });
        }

        id_libro = Number(id_libro);


        //Antes de modificar, se verifica si el libro existe:
        const libroExiste = await LibroService.obtenerLibroPorId(id_libro);

        if (!libroExiste) {
            return res.status(404).json({
                status: false,
                message: 'Libro no encontrado. No se puede modificar'
            });
        }

        let libro = await LibroService.modificarLibro(id_libro, titulo, autor, anio);

        return res.status(200).json({
            status: true,
            message: 'Libro modificado exitosamente',
            data: libro
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Error al obtener el libro'
        })
    }
};

const eliminarLibro = async (req: any, res: any) => {
    try {
        let id_libro = await req.params.id_libro;
        id_libro = Number(id_libro);
        const libro = await LibroService.eliminarLibro(id_libro);

        return res.status(200).json({
            status: true,
            message: 'Libro eliminado exitosamente',
            data: libro
        });
    }
    catch (erro: any) {
        console.log(error);
        return res.status(500).json({
            status: false,
            message: 'Error al obtener el libro'
        });
    }
};

const LibroController = {
    obtenerLibros,
    obtenerLibrosPaginados,
    obtenerLibroPorId,
    insertarLibro,
    modificarLibro,
    eliminarLibro
};

export default LibroController;