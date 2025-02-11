document.addEventListener("DOMContentLoaded", function () {
    fetch("info.json")
        .then(response => response.json())
        .then(data => {
            const dragonContainer = document.getElementById("dragonContainer");
            const humanContainer = document.getElementById("humanContainer");

            data.dragones.forEach(dragon => {
                const dragonElement = document.createElement("div");
                dragonElement.classList.add("dragon");

                const title = document.createElement("h3");
                title.textContent = dragon.nombre;

                const content = document.createElement("div");
                content.classList.add("content");
                content.innerHTML = `
                    <img src="${dragon.imagen}" alt="${dragon.nombre}">
                    <p>${dragon.descripcion}</p>
                `;

                dragonElement.appendChild(title);
                dragonElement.appendChild(content);
                dragonContainer.appendChild(dragonElement);
            });

            data.personajes.forEach(personaje => {
                const personajeElement = document.createElement("div");
                personajeElement.classList.add("personaje");

                const title = document.createElement("h3");
                title.textContent = personaje.nombre;

                const content = document.createElement("div");
                content.classList.add("content");
                content.innerHTML = `
                    <img src="${personaje.imagen}" alt="${personaje.nombre}">
                    <p>${personaje.descripcion}</p>
                `;

                personajeElement.appendChild(title);
                personajeElement.appendChild(content);
                humanContainer.appendChild(personajeElement);
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));
});