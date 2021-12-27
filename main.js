let numero = "";

function clickedNumber(n) {
    if (numero.length < 5) {
        let selectedElement = document.querySelector(".pisca");
        selectedElement.innerHTML = n;
        numero += n;
        selectedElement.classList.remove("pisca");
        if (selectedElement.nextElementSibling != null) {
            selectedElement.nextElementSibling.classList.add("pisca");
        }
        if (numero.length == 5) {
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
