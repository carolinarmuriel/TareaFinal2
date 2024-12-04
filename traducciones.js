const translations = {
    es: {
        title: "Cultura Animal",
        subtitle: "Explorando la diversidad del reino animal de una manera natural",
        home: "Inicio",
        animals: "Animales",
        gallery: "Galería",
        adopt: "Apadrina un animal",
        contact: "Contacto",
        featuredAnimals: "Animales Destacados",
        lion: "León",
        lionDescription: "El león es conocido como el rey de la selva.",
        tiger: "Tigre",
        tigerDescription: "El tigre es el felino más grande del mundo.",
        elephant: "Elefante",
        elephantDescription: "El elefante es el animal terrestre más grande.",
        eagle: "Águila",
        eagleDescription: "El águila es un ave de presa majestuosa."
    },
    en: {
        title: "Animal Culture",
        subtitle: "Exploring the diversity of the animal kingdom naturally",
        home: "Home",
        animals: "Animals",
        gallery: "Gallery",
        adopt: "Adopt an animal",
        contact: "Contact",
        featuredAnimals: "Featured Animals",
        lion: "Lion",
        lionDescription: "The lion is known as the king of the jungle.",
        tiger: "Tiger",
        tigerDescription: "The tiger is the largest feline in the world.",
        elephant: "Elephant",
        elephantDescription: "The elephant is the largest land animal.",
        eagle: "Eagle",
        eagleDescription: "The eagle is a majestic bird of prey."
    },
    // Más idiomas...
};

const languageSelector = document.getElementById("languageSelector");
const searchBar = document.getElementById("searchBar");

// Función para cambiar idioma
const loadLanguage = (lang) => {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[lang][key] || el.textContent;
    });
};

// Filtro de búsqueda
const filterCards = () => {
    const query = searchBar.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
    });
};

// Eventos
languageSelector.addEventListener("change", (e) => loadLanguage(e.target.value));
searchBar.addEventListener("input", filterCards);

// Cargar idioma predeterminado
loadLanguage("es");
