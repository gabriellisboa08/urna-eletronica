let numero = "";
const audioBotao = document.querySelector("#audio-botão");
const audioBotaoConfirma = document.querySelector("#audio-botão-confirma");
let spanName = document.querySelector("#span-nome");
let spanPartido = document.querySelector("#span-partido");
let imgPrincipal = document.querySelector("#img-prefeito");
let votos = [];
let etapa = 1;
document.addEventListener ('keypress', (event) => {
    const keyName = event.key;

    switch(keyName){
        case "1": clickedNumber(keyName)
        break
        case "2": clickedNumber(keyName)
        break
        case "3": clickedNumber(keyName)
        break
        case "4": clickedNumber(keyName)
        break
        case "5": clickedNumber(keyName)
        break
        case "6": clickedNumber(keyName)
        break
        case "7": clickedNumber(keyName)
        break
        case "8": clickedNumber(keyName)
        break
        case "9": clickedNumber(keyName)
        break
        case "0": clickedNumber(keyName)
        break
        case "Enter" : confirma()
        break
        default: 
        return

    }
})

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
                let div = document.querySelector("#info-candidatos");
                div.innerHTML =
                    "<div class='pisca' id='div-info-voto-nulo'>VOTO NULO</div>";
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
                alert("voto nulo?");
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
    if (etapa == 2) {
        let candidatoEscolhido = prefeitos.filter(
            (item) => item.nCandidatura == numero
        );
        if (candidatoEscolhido.length == 0) {
            votos.push("Voto-Nulo");
            console.log(votos);
        } else {
            votos.push(candidatoEscolhido);
        }
    }

    proximaEtapa();
}

function fim() {
    let div = document.querySelector(".urna-info");

    div.innerHTML = "";
    div.innerHTML =
        "<div class='progress-bar'><div id='progress-bar'></div> <div id='gravando'>Gravando</div></div>";
    // div.style.padding = "10%";
    setTimeout(() => {
        div.innerHTML = "";
        div.innerHTML = "<div id='div-fim'>FIM</div>";
        audioBotaoConfirma.play();
    }, 1500);
    console.log(votos);
}
