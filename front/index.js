const movies$$ = document.querySelector(".movies");

const requestMovie = () => {
  fetch("http://localhost:3000/movies")
    .then((res) => res.json())
    .then((movies) => paint(movies));
};

const paint = (movies) => {
  for (const movie of movies) {
    // movies$$.innerHTML = "";
    const movie$$ = document.createElement("div");
    const title$$ = document.createElement("h3");
    const img$$ = document.createElement("img");
    const description$$ = document.createElement("p");
    const year$$ = document.createElement("p");
    const director$$ = document.createElement("p");

    movie$$.classList.add("movie");
    title$$.textContent = movie.title;
    img$$.src = movie.img;
    description$$.textContent = movie.description;
    year$$.textContent = movie.year;
    director$$.textContent = movie.director;

    movie$$.appendChild(title$$);
    movie$$.appendChild(img$$);
    movie$$.appendChild(description$$);
    movie$$.appendChild(year$$);
    movie$$.appendChild(director$$);
    movies$$.appendChild(movie$$);
  }
};

requestMovie();
