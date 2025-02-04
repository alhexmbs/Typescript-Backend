import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const obtenerLibros = async () => {
    return await prisma.libro.findMany({
        orderBy: {id_libro: "asc"}
    });
};

const obtenerLibrosPaginados = async (limit: number, offset: number) => {
    return await prisma.libro.findMany({
        take: limit,
        skip: offset,
        orderBy: { id_libro: "asc" }
    });
};

const LibroModel = {
    obtenerLibros,
    obtenerLibrosPaginados
};

export default LibroModel;