// Referencias a los elementos
const userInput = document.getElementById('userInput');
const avatarImage = document.getElementById('avatarImage');

// Palabras clave y rutas de imágenes
const imageMapping = {
    "hola": "karolsaludo.png",
    "novio": "karolamor.png",
    "pareja": "karolamor.png",
    "es lindo": "karolamor.png",
    "trato": "karolamor.png",
    "piropos": "karolamor.png",
    "José": "karolamor.png",
    "José y tú": "karolamor.png",
    "oaxaca": "karolamor.png",
    "gastronomía": "karolamor.png",
    "clima de oaxaca": "karolamor.png",
    "cómo va la relación": "karolamor.png",
    "cumpleaños": "karolamor.png",
    "buena persona": "karolamor.png",
    "José es genial": "karolamor.png",
    "feliz": "karolhabla.png",
    "paz": "karolhabla.png",
    "relajarse": "karolhabla.png",
    "futuro": "karolhabla.png",
    "soñar": "karolhabla.png",
    "ocupado": "karolhabla.png",
    "trabajo": "karolhabla.png",
    "divertido": "karolhabla.png",
    "pasar el rato": "karolhabla.png",
    "aburrido": "karolhabla.png",
    "no sé qué hacer": "karolhabla.png",
    "cómo eres": "karolhabla.png",
    "canción": "karolhabla.png",
    "música": "karolhabla.png",
    "banda": "karolhabla.png",
    "broma": "karolhabla.png",
    "chiste": "karolhabla.png",
    "default": "karolnormal.png"
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
