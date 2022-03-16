class Candidatos {
    constructor(nCandidatura, nome, partido, foto, nomeVice, fotoVice) {
        this.nome = nome;
        this.nCandidatura = nCandidatura;
        this.partido = partido;
        this.foto = { url: foto };
        this.nomeVice = nomeVice;
        this.fotoVice = fotoVice;
    }
}
let prefeitos = [];
let vereadores = [];

prefeitos.push(
    new Candidatos(
        "74",
        "Josué da Silva",
        "PILANTRAS",
        "img/prefeito-1.jpg",
        "Reinoldo feliciano",
        "img/vice-1.jpg"
    ),
    new Candidatos(
        "68",
        "Vouti roubei",
        "Safados",
        "img/prefeito-2.jpg",
        "Martendal",
        "img/vice-2.jpg"
    )
);

vereadores.push(
    new Candidatos("12345", "Zé Mão boba", "corruPTos", "img/vereador-1.jpg"),
    new Candidatos(
        "54321",
        "Rosinha do Prado",
        "pé de feijão",
        "img/vereador-2.jpg"
    ),
   
);
let candidatos = [];
candidatos.push(prefeitos, vereadores);
