class Candidatos {
    constructor(nCandidatura, nome, partido, foto) {
        this.nome = nome;
        this.nCandidatura = nCandidatura;
        this.partido = partido;
        this.foto = { url: foto };
    }
}
let prefeitos = [];
let vereadores = [];

prefeitos.push(
    new Candidatos("74", "Josué da Silva", "PILANTRAS", "./prefeito-1.jpg")
);
prefeitos.push(
    new Candidatos("68", "Vouti roubei", "Safados", "./prefeito-2.jpg")
);

vereadores.push(
    new Candidatos("12345", "Zé Mão boba", "corruPTos", "./prefeito-1.jpg")
);

vereadores.push(
    new Candidatos("54321", "João ladrão ", "pé de feijão", "./prefeito-2.jpg")
);
let candidatos = [];
candidatos.push(prefeitos, vereadores);
