function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}
function alterarCurso {
    let trocarCurso = document.getElementById('inputNome').value;

    if (trocarCurso === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomeCurso').innerHTML = trocarCurso;
    }
}
function alterarstatus {
    let trocarstatus = document.getElementById('status').value;

    if (trocarstatus === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById('nomestatus').innerHTML = trocarstatus;
    }
}




