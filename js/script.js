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

        }

        RealizarCriptografia(texto.value);

    } else {
        alert("Digite um texto para ser criptografado")
    }

}


function RealizarCriptografia(texto) {

    let textoCriptografado = document.querySelector('#textcript');

    let chaves = ['a', 'e', 'i', 'o', 'u'];
    let textoCriptografadoFinal = "";

    let textoOriginal = texto.split("");

    textoOriginal.forEach(element => {

        switch (element) {
            case 'a':
                element = "ai"
                textoCriptografadoFinal += element;
                break;
            case "e":
                element = "enter"
                textoCriptografadoFinal += element;
                break;
            case "i":
                element = "imes"
                textoCriptografadoFinal += element;
                break;
            case "o":
                element = "ober"
                textoCriptografadoFinal += element;
                break;
            case "u":
                element = "ufat"
                textoCriptografadoFinal += element;
                break;

            default:

                textoCriptografadoFinal += element;
                break;
        }


    });

    textoCriptografado.value = textoCriptografadoFinal;
}