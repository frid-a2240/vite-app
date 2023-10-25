// script.js

function openFile() {
    const fileInput = document.getElementById("fileInput");
    const fileContent = document.getElementById("fileContent");
    const originalContent = document.getElementById("originalContent");
    const textContent = document.getElementById("textContent");
    const charCount = document.getElementById("charCount");

    fileInput.value = '';
    originalContent.textContent = '';
    textContent.textContent = '';
    charCount.textContent = '0 caracteres encontrados';

    fileInput.click();

    fileInput.addEventListener("change", function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;
                originalContent.textContent = content;
                const lettersOnly = content.replace(/[^a-zA-Z]/g, '');
                textContent.textContent = lettersOnly.split('').join('\n');
                charCount.textContent = `${lettersOnly.length} caracteres encontrados`;
                fileContent.style.display = "block";
            };

            reader.readAsText(file);
        }
    });
}

function clearContent() {
    const textContent = document.getElementById("textContent");
    textContent.textContent = '';
    const fileInput = document.getElementById("fileInput");
    fileInput.value = '';
    // Vuelve a mostrar los botones "Práctica 1" e "Inicio"
    document.getElementById("practica1").style.display = "block";
    document.getElementById("inicio").style.display = "block";
}

// Función para cargar el ejercicio
function openExercise() {
    const exerciseContent = document.getElementById("exerciseContent");

    const exerciseHTML = `
        <h2>Práctica 1 - Archivo de Texto</h2>
        <input type="file" id="fileInput" accept=".txt" style="display: none;">
        <button onclick="openFile()">Abrir Archivo de Texto</button>
        <button onclick="clearContent()">Borrar Contenido</button>
        <div id="fileContent" style="display: none;">
            <h3>Contenido original del archivo:</h3>
            <pre id="originalContent"></pre>
            <h3>Contenido del archivo (solo letras):</h3>
            <pre id="textContent"></pre>
            <p id="charCount">0 caracteres encontrados</p>
        </div>
        <script src="script.js"></script>
    `;

    exerciseContent.innerHTML = exerciseHTML;
}
