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
}

const LibroController = {
    obtenerLibros,
    obtenerLibrosPaginados
};

export default LibroController;