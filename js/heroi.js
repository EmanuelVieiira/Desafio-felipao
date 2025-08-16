
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "fez um ataque desconhecido";
        }

        console.log(`O ${this.tipo} ${this.nome} ${ataque}`);
    }
}

// Criando alguns heróis para testar
let heroi1 = new Heroi("Emanuel", 25, "mago");
let heroi2 = new Heroi("Carlos", 30, "guerreiro");
let heroi3 = new Heroi("Rafa", 22, "monge");
let heroi4 = new Heroi("Yuri", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
