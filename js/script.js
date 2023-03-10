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
        document.querySelector("#texto1").value = ""

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

function copiarTexto() {
    let textoCopiado = document.getElementById("textcript");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textoCopiado.value);
    document.getElementById("textcript").value = "Nenhuma mensagem!"
}


function Descriptografar (  ) {
    let campoTextoParaDescriptografar = document.querySelector("#texto1").value;
    let campoTextoDescriptografado = document.querySelector('#textcript');
    let chaves = ['a', 'e', 'i', 'o', 'u'];
    let textoDescriptografadoFinal = "";

    let textoCriptografado = campoTextoParaDescriptografar.split("");

    for (let index = 0; index < textoCriptografado.length; index++) {
       
        switch (textoCriptografado[index]) {
            case 'a':
                textoDescriptografadoFinal += textoCriptografado[index]
                index++
                break;
            case "e":
                textoDescriptografadoFinal += textoCriptografado[index]
                index +=4
                break;
            case "i":
                textoDescriptografadoFinal += textoCriptografado[index]
                index +=3
                break;
            case "o":
                textoDescriptografadoFinal += textoCriptografado[index]
                index +=3
                break;
            case "u":
                textoDescriptografadoFinal += textoCriptografado[index]
                index +=3
                
                break;

            default:
                textoDescriptografadoFinal += textoCriptografado[index]
                break;
        }
    }

    campoTextoDescriptografado.value = textoDescriptografadoFinal;
    document.querySelector("#texto1").value = ""

}