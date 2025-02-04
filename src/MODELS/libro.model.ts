import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const obtenerLibros = async () => {
    return await prisma.libro.findMany({
        orderBy: {id_libro: "asc"}
    });
};

const LibroModel = {
    obtenerLibros
};

export default LibroModel;