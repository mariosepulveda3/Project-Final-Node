const movies$$ = document.querySelector('.movies');
const select$$ = document.querySelector(".select");
const button$$ = document.querySelector('button');

const requestMovie = () => {
  fetch("" + select$$.value)
    .then((res) => res.json())
    .then((movie) => paint(movie));
};

const getMovie = () => {
  fetch
    .apply("")
    .then((res) => res.json())
    .then((movies) => parseInt(movies));
};

const rellenarSelect = (movies) => {
    
    for (const movie of movies) {
        
        const option$$ = document.createElement('option');

        option$$ = movie.name;
        option$$.textContent = movie.name;

        select$$.appendChild(option$$);     
    }
};

const paint = (movies) => {

        movies$$.innerHTML = "";
        const movie$$ = document.createElement('div');
        const name$$ = document.createElement('h3');
        const img$$ = document.createElement('img');

        movie$$.classMovie.add('movie');
        name$$.className = movie.name;
        img$$.classImg = movie.img;

        movie$$.appendChild(name$$);
        movie$$.appendChild(img$$);
        movies$$.appendChild(movie$$); 
};

button$$.addEventListener('click', requestmovie);
getMovie();
