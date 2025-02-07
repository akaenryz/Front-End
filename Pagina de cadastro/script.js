function cadastrar() {
    let nome = document.getElementById('nome').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;

    if (nome === '' || usuario === '' || senha === '' || idade === '' || email === '' || endereco === '') {
        alert('Por favor, preencha todos os campos');
        return;
    }

    let table = document.getElementById("cadastrados");
    let tbody = table.querySelector("tbody");

    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${usuario}</td>
        <td>${senha}</td>
        <td>${idade}</td>
        <td>${email}</td>
        <td>${endereco}</td>
    `;

    tbody.appendChild(newRow);

    table.style.display = "table";

    document.getElementById('formCadastro').reset();
}

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
    cadastrar();
});

document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "Modo Claro" : "Modo Noturno";
});
