// Array con los destinos turísticos
const destinos = [
    {
        nombre: "Playa del Sol",
        pais: "España",
        descripcion: "Disfruta de la tranquilidad y las hermosas vistas del mar en Playa del Sol.",
        imagen: "images/img2.jpg",
        enlace: "#"
    },
    {
        nombre: "Montañas de la Sierra",
        pais: "México",
        descripcion: "Vive una experiencia única entre las impresionantes montañas y senderos naturales.",
        imagen: "images/img1.jpg",
        enlace: "#"
    },
    {
        nombre: "Ciudad Colonial",
        pais: "Colombia",
        descripcion: "Descubre la rica historia y cultura de nuestra hermosa ciudad colonial.",
        imagen: "images/img3.jpg",
        enlace: "#"
    },
    {
        nombre: "pasiaje Peru",
        pais: "Peru",
        descripcion: "Descubre la rica historia y cultura de nuestra hermosa ciudad colonial.",
        imagen: "images/img4.jpg",
        enlace: "#"
    },
    {
        nombre: "pasiaje Peru",
        pais: "Peru",
        descripcion: "Descubre la rica historia y cultura de nuestra hermosa ciudad colonial.",
        imagen: "images/img5.jpg",
        enlace: "#"
    },
    {
        nombre: "pasiaje Peru",
        pais: "Peru",
        descripcion: "Descubre la rica historia y cultura de nuestra hermosa ciudad colonial.",
        imagen: "images/img6.jpg",
        enlace: "#"
    },
    {
        nombre: "pasiaje Peru",
        pais: "Peru",
        descripcion: "Descubre la rica historia y cultura de nuestra hermosa ciudad colonial.",
        imagen: "images/img7.jpg",
        enlace: "#"
    }
];

// Seleccionar el contenedor donde se agregarán los destinos
const container = document.getElementById("destinos-container");

// Recorrer el array de destinos y agregar los elementos dinámicamente
destinos.forEach(destino => {
    // Crear el contenedor de cada destino
    const destinoDiv = document.createElement("div");
    destinoDiv.classList.add("destino");

    // Crear la imagen del destino
    const img = document.createElement("img");
    img.src = destino.imagen;
    img.alt = destino.nombre;

    // Crear el contenido del destino (título, descripción y botón)
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const h3 = document.createElement("h3");
    h3.textContent = destino.nombre;

    const p = document.createElement("p");
    p.textContent = destino.descripcion;

    const a = document.createElement("a");
    a.href = destino.enlace;
    a.classList.add("btn");
    a.textContent = "Ver más";

    // Agregar todos los elementos al destinoDiv
    contenido.appendChild(h3);
    contenido.appendChild(p);
    contenido.appendChild(a);
    
    destinoDiv.appendChild(img);
    destinoDiv.appendChild(contenido);

    // Agregar el destinoDiv al contenedor principal
    container.appendChild(destinoDiv);
});
