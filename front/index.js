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
    const title$$ = document.createElement("h3");
    const img$$ = document.createElement("img");
    const description$$ = document.createElement(".description");
    const year$$ = document.createElement(".year");
    const director$$ = document.createElement(".director");

    movie$$.classMovie.add("movie");
    title$$.className = movie.title;
    img$$.classImg = movie.img;
    description$$.className = movie.description;
    year$$.className = movie.year;
    director$$.className = movie.director;

    movie$$.appendChild(title$$);
    movie$$.appendChild(img$$);
    movie$$.appendChild(description$$);
    movie$$.appendChild(year$$);
    movie$$.appendChild(director$$);
    movies$$.appendChild(movie$$);
  }
};

requestMovie();
