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

const LibroController = {
    obtenerLibros
};

export default LibroController;