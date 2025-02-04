-- CreateTable
CREATE TABLE "Libro" (
    "id_libro" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "anio" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id_libro")
);
