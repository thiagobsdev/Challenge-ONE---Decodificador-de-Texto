let texto = document.querySelector("#texto1");

texto.addEventListener('keypress', function (e) {

    let texto = String.fromCharCode(e.charCode)

    if (!validainput(texto)) {
        e.preventDefault();
        alert("Não é permitido letras maiúsculas e caracteres especiais")
    }

})

function validainput(texto) {
    const padrao = '[a-z]';

    if (texto.match(padrao)) {
        return true;
    }
}