// Referencias a los elementos
const userInput = document.getElementById('userInput');
const avatarImage = document.getElementById('avatarImage');

// Palabras clave y rutas de imágenes
const imageMapping = {
    "hola": "Karolsaludo.png",
    "novio": "Karolamor.png",
    "pareja": "Karolamor.png",
    "es lindo": "Karolamor.png",
    "trato": "Karolamor.png",
    "piropos": "Karolamor.png",
    "José": "Karolamor.png",
    "José y tú": "Karolamor.png",
    "oaxaca": "Karolamor.png",
    "gastronomía": "Karolamor.png",
    "clima de oaxaca": "Karolamor.png",
    "cómo va la relación": "Karolamor.png",
    "cumpleaños": "Karolamor.png",
    "buena persona": "Karolamor.png",
    "José es genial": "Karolamor.png",
    "feliz": "Karolhabla.png",
    "paz": "Karolhabla.png",
    "relajarse": "Karolhabla.png",
    "futuro": "Karolhabla.png",
    "soñar": "Karolhabla.png",
    "ocupado": "Karolhabla.png",
    "trabajo": "Karolhabla.png",
    "divertido": "Karolhabla.png",
    "pasar el rato": "Karolhabla.png",
    "aburrido": "Karolhabla.png",
    "no sé qué hacer": "Karolhabla.png",
    "cómo eres": "Karolhabla.png",
    "canción": "Karolhabla.png",
    "música": "Karolhabla.png",
    "banda": "Karolhabla.png",
    "broma": "Karolhabla.png",
    "chiste": "Karolhabla.png",
    "default": "Karolnormal.png"
};

// Evento para capturar la entrada del usuario
userInput.addEventListener('input', () => {
    const inputText = userInput.value.toLowerCase();
    
    let matchedImage = "default";

    // Comprobar palabras clave
    for (const keyword in imageMapping) {
        if (inputText.includes(keyword)) {
            matchedImage = keyword;
            break;
        }
    }

    // Cambiar la imagen si hay coincidencia
    if (avatarImage.src !== imageMapping[matchedImage]) {
        avatarImage.src = imageMapping[matchedImage];
    }
});
