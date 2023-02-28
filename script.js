document.addEventListener("DOMContentLoaded", () => {
    class libro {
      constructor(title, autor, year, price) {
        this.title = title;
        this.autor = autor;
        this.year = year;
        this.price = price;
      }
    }

    console.log(biblioteca);

    const subirDisplay = document.querySelector(".up")

    let respuesta = document.querySelector("#respuesta")

    document.getElementById("ingresar").addEventListener("click", () => {

      subirDisplay.setAttribute("style", "display: none")
      respuesta.innerHTML = ""

      let form = document.createElement("form")
      form.id = "formulario"

      let title = document.createElement("input"),
          autor = document.createElement("input"),
          year = document.createElement("input"),
          price = document.createElement("input"),
          ingresar = document.createElement("input")

      title.type = "text";
      title.placeholder = "Ingresa el Titulo del libro";
      title.value = null

      autor.type = "text";
      autor.placeholder = "Ingresa el Autor del libro";
      autor.value = null

      year.type = "number";
      year.placeholder = "Ingresa el año de publicacion del libro";
      year.value = null

      price.type = "number";
      price.placeholder = "Ingresa el precio del libro";
      price.value = null

      ingresar.type = "button";
      ingresar.className = "btn"
      ingresar.value = "Ingresar libro";

      form.appendChild(title);
      form.appendChild(autor);
      form.appendChild(year);
      form.appendChild(price);
      form.appendChild(ingresar);

      respuesta.appendChild(form)

      ingresar.addEventListener("click", () => {
        let titleValue = title.value
        let autorValue = autor.value
        let yearValue = year.value
        let priceValue = price.value

        if (!titleValue || !autorValue || !yearValue || !priceValue) {
          let existeHijo = document.querySelector("#respuesta #sinLlenar");

          if (existeHijo) {
            document.getElementById("sinLlenar").remove()
          }

          let alert = document.createElement("p")
          alert.textContent = "Existen campos sin llenar"
          alert.id = "sinLlenar"
          //respuesta.appendChild(alert)
          respuesta.insertBefore(alert, respuesta.firstChild)

          if (!titleValue) {
            title.focus()
          } else if (!autorValue) {
            autor.focus()
          } else if (!yearValue) {
            year.focus()
          } else if (!priceValue) {
            price.focus()
          }

        } else {
          biblioteca.push(new libro(titleValue, autorValue, yearValue, priceValue));
          console.log(biblioteca);

          respuesta.innerHTML = ""

          let ingresado = document.createElement("p")
          ingresado.id = "ingresado"
          ingresado.textContent = "Libro ingresado con exito!"
          respuesta.appendChild(ingresado)

        }

      })

    });

    // Busca un libro por su nombre
    document.getElementById("buscar").addEventListener('click', () => {

      subirDisplay.setAttribute("style", "display: none")
      respuesta.innerHTML = ""

      console.log(biblioteca);

      let form = document.createElement("form")
      form.id = "formulario"

      let nomLibro = document.createElement("input")
      nomLibro.type = "text"
      nomLibro.placeholder = "Nombre del libro a buscar"

      let buscar = document.createElement("input")
      buscar.type = "button"
      buscar.value = "Buscar"
      buscar.className = "btn"

      form.appendChild(nomLibro)
      form.appendChild(buscar)
      respuesta.appendChild(form)

      // Buscar libro
      buscar.addEventListener("click", () => {
        let libroBuscado = nomLibro.value
        libroBuscado = libroBuscado.toLowerCase()

        if (libroBuscado) {
          //console.log(biblioteca.some(libro => libro.title.toLowerCase() === libroBuscado));

          if (biblioteca.some(libro => libro.title.toLowerCase() === libroBuscado) === true) {
            respuesta.innerHTML = ""

            console.log(biblioteca.find(libro => libro.title.toLowerCase() === libroBuscado));
            let libroEncontrado = biblioteca.find(libro => libro.title.toLowerCase() === libroBuscado)

            //
            let contentDivLibro = document.createElement("div")
            contentDivLibro.setAttribute("style", "grid-column: -1/1; display: grid; place-items: center")

            let divLibro = document.createElement("div");
            divLibro.classList.add("libro");
            divLibro.setAttribute("style", "width: 250px")


            // Crear los elementos p para la clave y valor de cada propiedad
            for (var clave in libroEncontrado) {
              let pClave = document.createElement("p");
              pClave.classList.add("clave");
              pClave.textContent = clave.toString().toUpperCase() + ": ";

              let pValor = document.createElement("p");
              pValor.classList.add("valor");
              pValor.textContent = libroEncontrado[clave];

              // Anidar los elementos p dentro del divLibro
              divLibro.appendChild(pClave);
              divLibro.appendChild(pValor);
            }

            contentDivLibro.appendChild(divLibro);
            respuesta.appendChild(contentDivLibro);

          } else {
            respuesta.innerHTML = ""
            let libroNoExiste = document.createElement("p")
            libroNoExiste.setAttribute("style", "grid-column: -1/1; text-align: center")
            libroNoExiste.textContent = "El libro que busca no existe en la biblioteca!"
            respuesta.appendChild(libroNoExiste);
          }

        } else {
          let existeHijo = document.querySelector("#respuesta #sinLlenar");

          if (existeHijo) {
            document.getElementById("sinLlenar").remove()
          }

          let alert = document.createElement("p")
          alert.textContent = "Ingrese un libro a buscar"
          alert.id = "sinLlenar"
          respuesta.insertBefore(alert, respuesta.firstChild)

          nomLibro.focus()
        }
      })
    })

    document.getElementById("ver").addEventListener("click", () => {

      subirDisplay.setAttribute("style", "display: grid")

      respuesta.innerHTML = ""
      biblioteca.forEach(libro => {
        // Crear el elemento div para el libro
        let divLibro = document.createElement("div");
        divLibro.classList.add("libro");

        // Crear los elementos p para la clave y valor de cada propiedad
        for (var clave in libro) {
          let pClave = document.createElement("p");
          pClave.classList.add("clave");
          pClave.textContent = clave.toString().toUpperCase() + ": ";

          let pValor = document.createElement("p");
          pValor.classList.add("valor");
          pValor.textContent = libro[clave];

          // Anidar los elementos p dentro del divLibro
          divLibro.appendChild(pClave);
          divLibro.appendChild(pValor);
        }

        // Añadir el divLibro al contenedor
        respuesta.appendChild(divLibro);
      })
    })

    document.getElementById("clean").addEventListener("click", () => {
      subirDisplay.setAttribute("style", "display: none")
      respuesta.innerHTML = ``
    })
});