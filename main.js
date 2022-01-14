let numero = "";
const audioBotao = document.querySelector("#audio-botão");
const audioBotaoConfirma = document.querySelector("#audio-botão-confirma");
let spanName = document.querySelector("#span-nome");
let spanPartido = document.querySelector("#span-partido");
let imgPrincipal = document.querySelector("#img-prefeito");
let votos = [];
let etapa = 1;
let branco = false;
let nulo = false;

document.addEventListener("keypress", (event) => {
    const keyName = event.key;

    switch (keyName) {
        case "1":
            clickedNumber(keyName);
            break;
        case "2":
            clickedNumber(keyName);
            break;
        case "3":
            clickedNumber(keyName);
            break;
        case "4":
            clickedNumber(keyName);
            break;
        case "5":
            clickedNumber(keyName);
            break;
        case "6":
            clickedNumber(keyName);
            break;
        case "7":
            clickedNumber(keyName);
            break;
        case "8":
            clickedNumber(keyName);
            break;
        case "9":
            clickedNumber(keyName);
            break;
        case "0":
            clickedNumber(keyName);
            break;
        case "Enter":
            confirma();
            break;
        default:
            return;
    }
});

function clickedNumber(n) {
    audioBotao.play();
    if (etapa == 1) {
        if (numero.length < 5) {
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
                //aqui vou aplicar a informação de voto nulo
                infoVotoNulo();
            } else {
                mostrarCandidato(vereadorEscolhido);
            }
        }
    }
    if (etapa === 2) {
        if (numero.length < 2) {
            let selectedElement = document.querySelector(".pisca");
            selectedElement.innerHTML = n;
            numero += n;
            selectedElement.classList.remove("pisca");
            if (selectedElement.nextElementSibling != null) {
                selectedElement.nextElementSibling.classList.add("pisca");
            }
        }
        if (numero.length === 2) {
            let candidatoEscolhido = prefeitos.filter(
                (item) => item.nCandidatura == numero
            );
            if (candidatoEscolhido.length == 0) {
                infoVotoNulo();
            } else {
                mostrarCandidato(candidatoEscolhido);
            }
        }
    }
}

function mostrarCandidato(candidatoEscolhido) {
    let spanName = document.querySelector("#span-nome");
    let spanPartido = document.querySelector("#span-partido");
    let imgPrincipal = document.querySelector("#img-prefeito");
    console.log(spanName, spanPartido, imgPrincipal);
    spanName.innerText = candidatoEscolhido[0].nome;
    imgPrincipal.innerHTML = `<img id="image-img-principal" src='${candidatoEscolhido[0].foto.url}'></img>`;
    spanPartido.innerText = candidatoEscolhido[0].partido;
}
function corrige() {
    document
        .querySelectorAll(".num-digitado")
        .forEach(
            (item) => ((item.innerText = ""), item.classList.remove("pisca"))
        );
    imgPrincipal.innerHTML = null;
    spanName.innerText = null;
    spanPartido.innerText = null;
    document.querySelector("#num-digitado-1").classList.add("pisca");
    numero = "";
    if (document.querySelector(".div-removivel") != null) {
        let div = document.querySelector("#info-candidatos");
        let divFilho = document.querySelector(".div-removivel");
        div.removeChild(divFilho)
    }
    if (document.querySelector("#info-candidatos").children.length != 2) {
        criarDivNomePartido();
    }
}

function proximaEtapa() {
    if (etapa === 1) {
        document.querySelector("#tipo-cargo").innerText = "PREFEITO";

        for (let c = 5; c >= 0; c--) {
            document
                .querySelector("#numeros-digitados")
                .removeChild(
                    document.querySelector("#numeros-digitados").lastChild
                );
        }
        corrige();
    }
    if (etapa === 2) {
        fim();
    }
    etapa++;
}
function confirma() {
    if (etapa == 1) {
        if (branco == true) {
            votos.push("voto-em-branco");
        } else {
            let vereadorEscolhido = vereadores.filter(
                (item) => item.nCandidatura == numero
            );
            if (vereadorEscolhido.length == 0) {
                votos.push("Voto-Nulo");
                console.log(votos);
            } else {
                votos.push(vereadorEscolhido);
            }
        }
        // document.querySelector("#img-vice-prefeito").style.display = "block";

    }
    if (etapa == 2) {
        if (branco == true) {
            votos.push("voto-em-branco");
        } else {
            let candidatoEscolhido = prefeitos.filter(
                (item) => item.nCandidatura == numero
            );
            if (candidatoEscolhido.length == 0) {
                votos.push("Voto-Nulo");
                console.log(votos);
            } else {
                votos.push(candidatoEscolhido);
                console.log(votos)
                chamarComprovante(votos);
            }
        }
    }

    proximaEtapa();
    branco = false;
}

function choosenBranco() {
    let div = document.querySelector("#info-candidatos");
    let filho = div.children;
    div.removeChild(filho[0]);
    div.removeChild(filho[0]);
    let newFilho = document.createElement("div");
    newFilho.classList.add("pisca");
    newFilho.classList.add("div-removivel")
    newFilho.setAttribute("id", "div-voto-branco");
    newFilho.innerText = "VOTO EM BRANCO";
    div.appendChild(newFilho);
    branco = true;
}
function fim() {
    let div = document.querySelector(".urna-info");
    div.innerHTML = "";
    div.innerHTML =
        "<div class='progress-bar'><div id='progress-bar'></div> <div id='gravando'>Gravando</div></div>";
    setTimeout(() => {
        div.innerHTML = "";
        div.innerHTML = "<div id='div-fim'>FIM</div>";
        audioBotaoConfirma.play();
    }, 1500);
    console.log(votos);
}

function criarDivNomePartido() {
    let div = document.querySelector("#info-candidatos");
    let filho1 = document.createElement("div");
    filho1.classList.add("info-candidatos");
    filho1.innerText = "Nome:";
    let filho2 = document.createElement("div");
    filho2.classList.add("info-candidatos");
    filho2.innerText = "Partido:";
    let filho1_1 = document.createElement("span");
    filho1_1.setAttribute("id", "span-nome");
    let filho1_2 = document.createElement("span");
    filho1_2.setAttribute("id", "span-partido");
    filho1.appendChild(filho1_1);
    filho2.appendChild(filho1_2);
    div.appendChild(filho1);
    div.appendChild(filho2);
}

function infoVotoNulo() {
    let urnaCandidatos = document.querySelector("#info-candidatos");
    console.log(urnaCandidatos.children);
    let filhos = urnaCandidatos.children;
    console.log(filhos);
    urnaCandidatos.removeChild(filhos[0]);
    urnaCandidatos.removeChild(filhos[0]);
    let divVotoNulo = document.createElement("div");
    divVotoNulo.classList.add("pisca");
    divVotoNulo.classList.add("div-removivel");
    divVotoNulo.setAttribute("id", "div-info-voto-nulo");
    divVotoNulo.innerText = "VOTO NULO";
    urnaCandidatos.appendChild(divVotoNulo);
}

function chamarComprovante(candidatoEscolhido) {
    let spanComprovanteVereador = document.querySelector(
        "#span-comprovante-vereador"
    ); 
    let spanComprovantePrefeito = document.querySelector(
        "#span-comprovante-prefeito"
    );
    spanComprovanteVereador.innerText = candidatoEscolhido[0][0].nome
    spanComprovantePrefeito.innerText = candidatoEscolhido[1][0].nome
    let divMainComprovante = document.querySelector("#comprovante-wrapper")
    divMainComprovante.style.display = "flex"
}

