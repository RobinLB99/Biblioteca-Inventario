document.addEventListener("DOMContentLoaded", () => {
    class libro {
      constructor(title, autor, year, price) {
        this.title = title;
        this.autor = autor;
        this.year = year;
        this.price = price;
      }
    }

    let respuesta = document.querySelector("#respuesta")

    document.getElementById("ingresar").addEventListener("click", () => {

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
          respuesta.appendChild(alert)

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

    document.getElementById("ver").addEventListener("click", () => {

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
      respuesta.innerHTML = ``
    })
});