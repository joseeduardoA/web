function greetUser() {
    // Obtener el nombre del input
    const name = document.getElementById('name').value;

    // Obtener el elemento de saludo
    const greeting = document.getElementById('greeting');

    // Comprobar si se ingresó un nombre
    if (name.trim() !== "") {
        greeting.textContent = `¡Hola, ${name}! Qué gusto conocerte.`;
    } else {
        greeting.textContent = "Por favor, ingresa tu nombre.";
    }
}
