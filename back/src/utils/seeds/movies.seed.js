const mongoose = require('mongoose');
const Movie = require('../../api/movies/movies.model');
const DB_URL = process.env.DB_URL;

const movies = [
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
    {
        title: "",
        img: "",
        description: "",
        year: "",
        director: "",
    },
];

mongoose.connect(DB_URL)
.then(async () => {
    const allMovies = await Movie.find().lean();

    if(!allMovies.length) {
        console.log('[seed]: No se encuentran películas');
    }   else {
        console.log((`[seed]: encontradas ${allMovies.length} películas`));
        await Movie.collection.drop();
        console.log('[seed]: Película eliminada correctamente');
    }
})
.catch((error) => console.log('[seed]: Error eliminando la película: ', error))
.then(async() => {
    await Movie.insertMany(movies);
    console.log('[seed]: Nuevas películas añadidas con exito');
})
.catch((error) => console.log('[seed]: Error añadiendo películas', error))
.finally(() => mongoose.disconnect());