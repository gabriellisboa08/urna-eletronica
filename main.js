let numero = "";
const audioBotao = document.querySelector("#audio-botão");
const audioBotaoConfirma = document.querySelector("#audio-botão-confirma");
let spanName = document.querySelector("#span-nome");
let spanPartido = document.querySelector("#span-partido");
let imgPrincipal = document.querySelector("#img-prefeito");

function clickedNumber(n) {
     audioBotao.play();
    if (numero.length < 5) {
        if(numero.length < 1) {

        }
        let selectedElement = document.querySelector(".pisca");
        selectedElement.innerHTML = n;
        numero += n;
        selectedElement.classList.remove("pisca");
        if (selectedElement.nextElementSibling != null) {
            selectedElement.nextElementSibling.classList.add("pisca");
        }
    }
    if (numero.length === 5) {
        let vereadorEscolhido = vereadores.filter(
            (item) => item.nCandidatura == numero
        );
        if (vereadorEscolhido.length == 0) {
            alert("voto nulo?");
        } else {
            console.log(vereadorEscolhido);
            mostrarCandidato(vereadorEscolhido);
        }
    }
}

function mostrarCandidato(vereadorEscolhido) {
    let spanName = document.querySelector("#span-nome");
    let spanPartido = document.querySelector("#span-partido");
    let imgPrincipal = document.querySelector("#img-prefeito");
    console.log(spanName, spanPartido, imgPrincipal);
    spanName.innerText = vereadorEscolhido[0].nome;
    imgPrincipal.innerHTML = `<img id="image-img-principal" src='${vereadorEscolhido[0].foto.url}'></img>`;
    spanPartido.innerText = vereadorEscolhido[0].partido;
}
function corrige() {
    document
        .querySelectorAll(".num-digitado")
        .forEach((item) => (item.innerText = ""));
    imgPrincipal.innerHTML = null
    spanName.innerText = null
    spanPartido.innerText = null
    document.querySelector("#num-digitado-1").classList.add("pisca")
    numero = ""
}

function atualizandoVotoNulo() {
    
}

