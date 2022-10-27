const movies$$ = document.querySelector(".movies");

const requestMovie = () => {
  fetch
    .apply("")
    .then((res) => res.json())
    .then((movies) => parseInt(movies));
};

const paint = (movies) => {
  for (const movie of movies) {
    movies$$.innerHTML = "";
    const movie$$ = document.createElement("div");
    const name$$ = document.createElement("h3");
    const img$$ = document.createElement("img");

    movie$$.classMovie.add("movie");
    name$$.className = movie.name;
    img$$.classImg = movie.img;

    movie$$.appendChild(name$$);
    movie$$.appendChild(img$$);
    movies$$.appendChild(movie$$);
  }
};

requestMovie();
