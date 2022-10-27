const title$$ = document.querySelector(".title");
const img$$ = document.querySelector(".img");
const description$$ = document.querySelector(".description");
const year$$ = document.querySelector(".year");
const director$$ = document.querySelector(".director");

const button$$ = document.querySelector(".send");

const sendForm = async () => {
  
    transform$$.value === "on"
    ? (transform$$.value = true)
    : (transform$$.value = false);

  const data = {
    title: title$$.value,
    img: img$$.value,
    description: description$$.value,
    year: year$$.value,
    director: director$$.value,
  };

  const sendData = JSON.stringify(data);

  const reply$$ = document.createElement("p");

  try {
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });
    reply$$.textContent = "Se ha creado la película correctamente";
  } catch (error) {
    reply$$.textContent = "No se ha podido crear la película correctamente";
  }

  document.body.appendChild(reply$$);
};


button$$.addEventListener("click", sendForm);
