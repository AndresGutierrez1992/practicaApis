const boton = document.querySelector(".boton");

boton.addEventListener("click", async () => {
  try {
    let resultado = await fetch("https://ghibliapi.herokuapp.com/films");
    let elementos = await resultado.json();
    let fragment = document.createDocumentFragment();
    let container = document.querySelector(".container");

    elementos.forEach((anime) => {
        
    let div = document.createElement("div");
    div.classList.add("caja");
    let h5 = document.createElement("h5");
    h5.classList.add("titulo");
    h5.textContent = anime.title
    let img = document.createElement("img");
    img.classList.add("img");
    img.src=anime.image;
    div.appendChild(h5);
    div.appendChild(img);
    fragment.appendChild(div);

    });

    container.appendChild(fragment);
    console.log(elementos);



  } catch (error) {}
});
