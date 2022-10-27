const express = require('express');
require('dotenv').config();

const db = require('./src/utils/database/db');
const indexRoutes = require('./src/api/index/index.routes');
const moviesRoutes = require('./src/api/movies/movies.routes');

// Conectamos con la base de datos
db.connectDb();

// Creamos el servidor
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

// Hacemos que nos funcione req.body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Indicamos las rutas
server.use('/', indexRoutes);
server.use('/movies', moviesRoutes);

// Arrancamos el servidor
server.listen(PORT, () => {
    console.log(`Servidor funcionando correctamente en http://localhost:${PORT}`);
});

