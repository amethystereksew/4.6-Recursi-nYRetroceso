// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

/**
 * Imprime mensajes en la consola y también en el log de la página.
 * @param {string} message - Mensaje a mostrar
 */
function logMessage(message) {
    // Mostrar en consola
    console.log(message);

    // Mostrar en la interfaz
    const logDiv = document.getElementById("log");
    const p = document.createElement("p");
    p.textContent = message;
    logDiv.appendChild(p);
}

//Función recursiva para buscar un regalo en la lista

function findGift(gifts, giftName, index = 0) {
    logMessage(`🔍 Buscando "${giftName}" en la posición ${index}...`);

    // Caso base: no se encontró el regalo
    if (index === gifts.length) {
        logMessage(`🚫 No se encontró "${giftName}" en la lista.`);
        return `${giftName} no está en la lista.`;
    }

    // Caso base: regalo encontrado
    if (gifts[index].toLowerCase() === giftName.toLowerCase()) {
        logMessage(`✅ ¡Encontrado! "${giftName}" está en la posición ${index}.`);
        return `${giftName} está en la posición ${index}.`;
    }

    // Paso recursivo: buscar en la siguiente posición
    return findGift(gifts, giftName, index + 1);
}

//Manejador del botón de búsqueda

function handleSearch() {
    const input = document.getElementById("giftInput").value.trim();

    // Limpiar el log de resultados anteriores
    document.getElementById("log").innerHTML = "";
    document.getElementById("result").textContent = "";

    logMessage("==================================");
    logMessage(`🧠 Iniciando búsqueda para: "${input}"`);

    const result = findGift(gifts, input);

    logMessage("📦 Resultado final:");
    logMessage(result);

    // Mostrar resultado final en área principal
    document.getElementById("result").textContent = result;
    console.log("Resultado:", result);
}
