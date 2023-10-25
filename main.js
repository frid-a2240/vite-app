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
    const exerciseContent = document.getElementById("exerciseContent");
    exerciseContent.innerHTML = ''; // Elimina todo el contenido
    const textContent = document.getElementById("textContent");
    const originalContent = document.getElementById("originalContent");
    const charCount = document.getElementById("charCount");
    textContent.textContent = '';
    originalContent.textContent = '';
    charCount.textContent = '0 caracteres encontrados';
    const fileInput = document.getElementById("fileInput");
    fileInput.value = '';
    // Vuelve a mostrar los botones "Práctica 1" e "Inicio"
    document.getElementById("practica1").style.display = "block";
    document.getElementById("inicio").style.display = "block";
}
function openExercise() {
    const exerciseContent = document.getElementById("exerciseContent");
    // lo que se hace de ejercicio se muestra aqui
    const exerciseHTML = `
        <h2>Practica 1 - Archivo de Texto</h2>
        <input type="file" id="fileInput" accept=".txt" style="display: none;">
        <button class="btn-exercise" onclick="openFile()">Abrir Archivo de Texto</button>
        <button class="btn-exercise" onclick="clearContent()">Borrar Contenido</button>
        <div id="fileContent" style="display: none;">
            <h3>Contenido original del archivo:</h3>
            <pre id="originalContent"></pre>
            <h3>Contenido del archivo (solo letras):</h3>
            <pre id="textContent"></pre>
            <p id="charCount">0 caracteres encontrados</p>
        </div>
    `;
    exerciseContent.innerHTML = exerciseHTML;
}

//  enlace "Práctica 1"
document.getElementById("practica1").addEventListener("click", function(event) {
    event.preventDefault();
    openExercise();
});
// enlace para el botón "Inicio"
document.getElementById("inicio").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function() {
    const messageBox = document.getElementById("message");
    const exerciseContent = document.getElementById("exerciseContent");
    const inicioButton = document.getElementById("inicio");
    const practica1Button = document.getElementById("practica1");
    const practica2Button = document.getElementById("practica2");
    const practica3Button = document.getElementById("practica3");
    const studentInfo = document.getElementById("studentInfo");
    const buttons = document.querySelectorAll(".btn-exercise");
    const practice2Image = document.getElementById("practice2Image");
    const practice3Image = document.getElementById("practice3Image");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            studentInfo.style.display = "none";
            practice2Image.style.display = "none";
            practice3Image.style.display = "none"; 
        });
    });
    messageBox.style.display = "none";
    exerciseContent.style.display = "none";
    inicioButton.addEventListener("click", function() {
        messageBox.style.display = "block";
        exerciseContent.style.display = "none";
    });
    practica1Button.addEventListener("click", function() {
        messageBox.style.display = "none";
        exerciseContent.style.display = "block";
    });
    practica2Button.addEventListener("click", function() {
        messageBox.style.display = "none";
        exerciseContent.style.display = "none";
        practice2Image.style.display = "block";
    });
    practica3Button.addEventListener("click", function() {
        messageBox.style.display = "none";
        exerciseContent.style.display = "none";
        practice3Image.style.display = "block"; 
    });
});
