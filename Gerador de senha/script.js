function gerarSenha(){

    caracteres = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZabcçdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}\\|;:",<.>/?~'
    comprimento = 12;

    let senha = '';
    for(let i = 0; i <comprimento; i++){
        const indice = Math.floor(Math.random()* caracteres.length);
        senha += caracteres.charAt(indice);
    }

    document.getElementById('senha').value = senha;
}

function copiarSenha(){

    const senhaInput = document.getElementById('senha');
    senhaInput.select();
    document.execCommand('copy');
    alert('Senha copiada para área de transferência!');
}