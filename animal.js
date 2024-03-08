class Animal {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    descrever () {
        console.log(`Animal: ${this.nome}. Idade: ${this.idade}.`);
    };
};

class Gato extends Animal {
    constructor (nome, idade, cor) {
        super (nome, idade);
        this.cor = cor;
    };

    miar () {
        console.log('Gato: \n —Miaaaaaaaaaaaaauuu')
    };
};

let animal1 = new Animal('cachorro', 8);
let animal2 = new Gato('gato', 3, 'pardo');

animal1.descrever();
animal2.descrever();
animal2.miar();