let numero = '';
const audioBotao = document.querySelector('#audio-botão');
const audioBotaoConfirma = document.querySelector('#audio-botão-confirma');
let spanName = document.querySelector('#span-nome');
let spanPartido = document.querySelector('#span-partido');
let imgPrincipal = document.querySelector('#img-prefeito');
let imgVicePrefeito = document.querySelector('#img-vice-prefeito');
let votos = [];
let etapa = 1;
let branco = false;
let nulo = false;
mostrarCandidatosDisponiveis();
document
    .querySelector('#comprovante-wrapper')
    .addEventListener('click', () => window.location.reload(false)); //após receber o comprovante, se clicar no mesmo o app reinicia!

document.addEventListener('keypress', (event) => {
    //aplicando os eventos do teclado
    const keyName = event.key;

    switch (keyName) {
        case '1':
            clickedNumber(keyName);
            break;
        case '2':
            clickedNumber(keyName);
            break;
        case '3':
            clickedNumber(keyName);
            break;
        case '4':
            clickedNumber(keyName);
            break;
        case '5':
            clickedNumber(keyName);
            break;
        case '6':
            clickedNumber(keyName);
            break;
        case '7':
            clickedNumber(keyName);
            break;
        case '8':
            clickedNumber(keyName);
            break;
        case '9':
            clickedNumber(keyName);
            break;
        case '0':
            clickedNumber(keyName);
            break;
        case 'Enter':
            confirma();
            break;
        default:
            return;
    }
});

function mostrarCandidatosDisponiveis() {
    let divPai = document.getElementById('opcoes-candidatos');
    if (divPai.children) {
        divPai.innerHTML = '';
    }
    function opçõesdisponíveis(op) {
        op.map((m, i) => {
            let div = document.createElement('div');
            let divSpans = document.createElement('div');
            divSpans.setAttribute('class', 'divspansInfo');
            let Img = document.createElement('img');
            Img.src = m.foto.url;
            let spanName = document.createElement('span');
            spanName.innerHTML = `Nome: ${m.nome}`;
            let spanN = document.createElement('span');
            spanN.innerHTML = `Nº: ${m.nCandidatura}`;
            let spaninfoPartido = document.createElement('span');

            spaninfoPartido.innerText = `Partido: ${m.partido}`;
            div.setAttribute('class', 'opcoescandidatos');
            div.setAttribute('id', `candidato${i + 1}`);
            div.appendChild(Img);
            div.appendChild(divSpans);
            divSpans.appendChild(spanName);
            divSpans.appendChild(spanN);
            divSpans.appendChild(spaninfoPartido);
            divPai.appendChild(div);
        });
    }
    if (etapa === 1) {
        opçõesdisponíveis(vereadores);
    }
    if (etapa === 2) {
        opçõesdisponíveis(prefeitos);
    }
}

function clickedNumber(n) {
    if (branco == true) {
        corrige(); // este bloco faz com que o branco desapareça assim que clicamos no número
    }
    audioBotao.play();
    if (etapa === 1) {
        if (numero.length < 5) {
            let selectedElement = document.querySelector('.pisca');
            selectedElement.innerHTML = n;
            numero += n;
            selectedElement.classList.remove('pisca');
            if (selectedElement.nextElementSibling != null) {
                selectedElement.nextElementSibling.classList.add('pisca');
            }
        }
        if (numero.length === 5) {
            let vereadorEscolhido = vereadores.filter(
                (item) => item.nCandidatura == numero
            );
            if (vereadorEscolhido.length == 0) {
                //aqui vou aplicar a informação de voto nulo
                if (nulo != true) {
                    infoVotoNulo();
                    nulo = true;
                }

                nulo == true;
                console.log(numero);
            } else {
                mostrarCandidato(vereadorEscolhido);
            }
        }
    }
    if (etapa === 2) {
        if (numero.length < 2) {
            let selectedElement = document.querySelector('.pisca');
            selectedElement.innerText = n;
            numero += n;
            selectedElement.classList.remove('pisca');
            if (selectedElement.nextElementSibling != null) {
                selectedElement.nextElementSibling.classList.add('pisca');
            }
        }
        if (numero.length === 2) {
            let candidatoEscolhido = prefeitos.filter(
                (item) => item.nCandidatura == numero
            );
            console.log(candidatoEscolhido);
            if (candidatoEscolhido.length == 0) {
                infoVotoNulo();
                nulo = true;
            } else {
                mostrarCandidato(candidatoEscolhido);
            }
        }
    }
}

function mostrarCandidato(candidatoEscolhido) {
    let spanName = document.querySelector('#span-nome');
    let spanPartido = document.querySelector('#span-partido');
    let imgPrincipal = document.querySelector('#img-prefeito');
    if (etapa == 2) {
        let imgVice = document.querySelector('#img-vice-prefeito');
        let nomeVice = document.querySelector('#span-nomeVice');
        imgVice.innerHTML = `<img id="image-img-vice" src='${candidatoEscolhido[0].fotoVice}'></img>`;
        nomeVice.innerText = candidatoEscolhido[0].nomeVice;
    }
    console.log(spanName, spanPartido, imgPrincipal, candidatoEscolhido);
    spanName.innerText = candidatoEscolhido[0].nome;
    imgPrincipal.innerHTML = `<img id="image-img-principal" src='${candidatoEscolhido[0].foto.url}'></img>`;
    spanPartido.innerText = candidatoEscolhido[0].partido;
}
function corrige() {
    document
        .querySelectorAll('.num-digitado')
        .forEach(
            (item) => ((item.innerText = ''), item.classList.remove('pisca'))
        );

    document
        .querySelectorAll('.info-candidatos > span')
        .forEach((element) => (element.innerText = null));
    imgPrincipal.innerHTML = null;

    document.querySelector('#num-digitado-1').classList.add('pisca');
    numero = '';
    branco = false;
    if (etapa == 2) {
        imgVicePrefeito.innerHTML = null;
    }
    if (document.querySelector('.div-removivel') != null) {
        let div = document.querySelector('#info-candidatos');
        let divFilho = document.querySelector('.div-removivel');
        div.removeChild(divFilho);
    }
    if (document.querySelector('#info-candidatos').children.length < 2) {
        criarDivNomePartido();
    }
    nulo = false;
}

function proximaEtapa() {
    if (etapa === 1) {
        document.querySelector('#tipo-cargo').innerText = 'PREFEITO';
        document.querySelector('#img-vice-prefeito').style.display = 'block';

        for (let c = 5; c >= 0; c--) {
            document
                .querySelector('#numeros-digitados')
                .removeChild(
                    document.querySelector('#numeros-digitados').lastChild
                );
        }

        corrige();
    }
    if (etapa === 2) {
        document.querySelector('.container-opções').style.opacity = 0;
        fim();
    }
    etapa++;
    let divPai = document.querySelector('#info-candidatos');
    let divPaiSpan = document.createElement('div');
    divPaiSpan.innerText = 'Vice: ';
    divPaiSpan.setAttribute('class', 'info-candidatos');
    let spanFilho = document.createElement('span');
    spanFilho.setAttribute('id', 'span-nomeVice');
    divPaiSpan.appendChild(spanFilho);
    divPai.appendChild(divPaiSpan);

    mostrarCandidatosDisponiveis();
}
function confirma() {
    if (etapa == 1) {
        if (branco == true) {
            votos.push('voto-em-branco');
        } else {
            let vereadorEscolhido = vereadores.filter(
                (item) => item.nCandidatura == numero
            );
            if (vereadorEscolhido.length == 0) {
                votos.push('Voto-Nulo');
                console.log(votos);
            } else {
                votos.push(vereadorEscolhido);
            }
        }
        // document.querySelector("#img-vice-prefeito").style.display = "block";
    }
    if (etapa == 2) {
        if (branco == true) {
            votos.push('voto-em-branco');
        } else {
            let candidatoEscolhido = prefeitos.filter(
                (item) => item.nCandidatura == numero
            );
            if (candidatoEscolhido.length == 0) {
                votos.push('Voto-Nulo');
                console.log(votos);
            } else {
                votos.push(candidatoEscolhido);
                console.log(votos);
            }
        }
    }

    proximaEtapa();
    branco = false;
}

function choosenBranco() {
    corrige();
    if (branco == true) {
        return;
    }
    let div = document.querySelector('#info-candidatos');
    let filho = div.children;
    while (filho.length > 0) {
        div.removeChild(filho[0]);
    }

    let newFilho = document.createElement('div');
    newFilho.classList.add('pisca');
    newFilho.classList.add('div-removivel');
    newFilho.setAttribute('id', 'div-voto-branco');
    newFilho.innerText = 'VOTO EM BRANCO';
    div.appendChild(newFilho);
    branco = true;
}
function fim() {
    let div = document.querySelector('.urna-info');
    div.innerHTML = '';
    div.innerHTML =
        "<div class='progress-bar'><div id='progress-bar'></div> <div id='gravando'>Gravando</div></div>";
    setTimeout(() => {
        div.innerHTML = '';
        div.innerHTML = "<div id='div-fim'>FIM</div>";
        audioBotaoConfirma.play();
    }, 1500);
    console.log(votos);
    chamarComprovante(votos);
}

function criarDivNomePartido() {
    let div = document.querySelector('#info-candidatos');
    let filho1 = document.createElement('div');
    filho1.classList.add('info-candidatos');
    filho1.innerText = 'Nome:';
    let filho2 = document.createElement('div');
    filho2.classList.add('info-candidatos');
    filho2.innerText = 'Partido:';
    let filho1_1 = document.createElement('span');
    filho1_1.setAttribute('id', 'span-nome');
    let filho1_2 = document.createElement('span');
    filho1_2.setAttribute('id', 'span-partido');
    filho1.appendChild(filho1_1);
    filho2.appendChild(filho1_2);
    div.appendChild(filho1);
    div.appendChild(filho2);
    if (etapa == 2) {
        let filho3 = document.createElement('div');
        filho3.classList.add('info-candidatos');
        filho3.innerText = 'Vice: ';
        let spanFilho3 = document.createElement('span');
        spanFilho3.setAttribute('id', 'span-nomeVice');
        filho3.appendChild(spanFilho3);
        div.appendChild(filho3);
    }
}

function infoVotoNulo() {
    if (nulo == true) {
        return
    }
    let urnaCandidatos = document.querySelector('#info-candidatos');
    let filhos = document.querySelectorAll('.info-candidatos');
    console.log(filhos);

    filhos.forEach((element) => {
        element.remove();
    });
    let divVotoNulo = document.createElement('div');
    divVotoNulo.classList.add('pisca');
    divVotoNulo.classList.add('div-removivel');
    divVotoNulo.setAttribute('id', 'div-info-voto-nulo');
    divVotoNulo.innerText = 'VOTO NULO';
    urnaCandidatos.appendChild(divVotoNulo);
}

function chamarComprovante(candidatoEscolhido) {
    setTimeout(() => {
        let spanComprovanteVereador = document.querySelector(
            '#span-comprovante-vereador'
        );
        let spanComprovantePrefeito = document.querySelector(
            '#span-comprovante-prefeito'
        );
        spanComprovanteVereador.innerText =
            candidatoEscolhido[0][0].nome != null
                ? candidatoEscolhido[0][0].nome
                : candidatoEscolhido[0];
        spanComprovantePrefeito.innerText =
            candidatoEscolhido[1][0].nome != null
                ? candidatoEscolhido[1][0].nome
                : candidatoEscolhido[1];
        let divMainComprovante = document.querySelector('#comprovante-wrapper');
        divMainComprovante.style.display = 'flex';
    }, 3000);
}
