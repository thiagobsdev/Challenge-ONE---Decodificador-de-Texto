let texto = document.querySelector("#texto1");

texto.addEventListener('keypress', function (e) {

    let texto = String.fromCharCode(e.charCode)

    if (!validainput(texto)) {
        e.preventDefault();
        alert("Não é permitido letras maiúsculas e caracteres especiais")
    }

})

function validainput(texto) {
    const padrao = '[a-z ]';

    if (texto.match(padrao)) {
        return true;
    }
}

function criptografar() {

    if (texto.value !== "") {

        let campoCriptografado = document.querySelector('.ladoBtext')
        const imagem = document.querySelector('.ladoBpadrao');

        if (campoCriptografado.classList.contains('displaynone')) {

            for (child of imagem.children) {
                child.classList.add('displaynone')
            }

            campoCriptografado.classList.remove('displaynone')
            campoCriptografado.classList.add('displayYes')

        } else {
            console.log('Deu errado')
        }

    } else {
        alert("Digite um texto para ser criptografado")
    }

}