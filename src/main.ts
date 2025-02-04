import "dotenv/config";
import express from "express";
import db from "./DATABASE/connection.database";
import cors from "cors";
import libroRouter from "./ROUTES/libro.routes";

const app = express();

(async () => {
    try {
        await db.query('SELECT NOW()'); // Consulta simple para verificar la conexión
        console.log("Conexión a la base de datos exitosa");
    } catch (error: any) {
        console.error("Error al conectar a la base de datos:", error.message);
        process.exit(1); // Detener el servidor si no hay conexión
    }
})();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/libros', libroRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
