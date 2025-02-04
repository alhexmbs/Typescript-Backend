import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Obtener todos los libros
const obtenerLibros = async () => {
    return await prisma.libro.findMany({
        orderBy: { id_libro: "asc" }
    });
};

//Obtener los libros paginados
const obtenerLibrosPaginados = async (limit: number, offset: number) => {
    return await prisma.libro.findMany({
        take: limit,
        skip: offset,
        orderBy: { id_libro: "asc" }
    });
};

//Obtener un libro usando el id
const obtenerLibroPorId = async (id_libro: number) => {
    return await prisma.libro.findUnique({
        where: { id_libro }
    });
};

//Insertar un libro
const insertarLibro = async (
    titulo: string,
    autor: string,
    anio: number
) => {
    return await prisma.libro.create({
        data: { titulo, autor, anio }
    });
};

//Modificar un libro
const modificarLibro = async (
    id_libro: number,
    titulo: string,
    autor: string,
    anio: number
) => {
    return await prisma.libro.update({
        where: { id_libro },
        data: { titulo, autor, anio }
    })
}

//Eliminar un libro
const eliminarLibro = async (id_libro: number) => {
    return await prisma.libro.delete({
        where: { id_libro }
    });
}

const LibroModel = {
    obtenerLibros,
    obtenerLibrosPaginados,
    obtenerLibroPorId,
    insertarLibro,
    modificarLibro,
    eliminarLibro
};

export default LibroModel;