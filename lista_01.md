# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 6 questões objetivas assinalando a alternativa correta
- Resolva as 4 questões dissertativas escrevendo no próprio arquivo .md
  - lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com ChatGPT e afins: entregar algo só para ganhar nota não faz você aprender e ficar mais inteligente. Não seja dependente da máquina!
- ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas

**1)** O que o código a seguir faz?

![Uma imagem](assets/ex01.PNG)

Escolha a opção que responde corretamente:

a) Imprime os números pares de 1 a 10.

______

**2)** Identificar a linha que falta no código para criar uma classe Veiculo com atributo marca, e uma classe Carro que herda de Veiculo com um método ligar(). 

![Uma imagem](assets/ex02.PNG)

No lugar onde está escrito “// linha” qual das opções abaixo deve estar para funcionar corretamente o código?

A) let carro = new Carro("Toyota");

______

**3)** Qual é o valor de resultado após a execução deste código?

![Uma imagem](assets/ex03.PNG)

Escolha a opção que responde corretamente:

A) 18

______

**4)** Como você criaria um método `acelerar()` em uma classe `Carro`, que recebe um parâmetro `velocidade` e o adiciona a um atributo `velocidadeAtual`?

A) ![Uma imagem](assets/ex04_1.PNG)

______

**5)** Qual a forma correta de definir uma classe Carro em JavaScript, com um método ligar() e um atributo marca?

A) ![Uma imagem](assets/ex05_1.PNG)

______

**6)** Observe o código abaixo:

![Uma imagem](assets/ex06.PNG)

Qual será a saída do código acima?

A) "Olá, meu nome é João. Olá, meu nome é Maria."

______

# Questões dissertativas

**7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método chamado descrever() na classe Animal.
  - Este método deve exibir no console uma descrição do animal com seu nome e idade.

Criando e manipulando Animais:
- Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
- Para cada animal, chame o método descrever() para ver a descrição no console.

Dica: Utilize `console.log()` para exibir as informações!

```javascript
class Animal {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };

    descrever () {
        console.log(`Animal: ${this.nome}. Idade: ${this.idade}.`);
    };
};

let animal1 = new Animal('cachorro', 8);
let animal2 = new Animal('gato', 3)

animal1.descrever ();
animal2.descrever ();
```
______

**8)** Nos últimos dias tivemos a oportunidade de ter contato com Programação Orientada a Objetos, e tivemos contato com o tema "herança". Herança é um princípio de orientação a objetos, que permite que classes compartilhem atributos e métodos. Ela é usada na intenção de reaproveitar código ou comportamento generalizado ou especializar operações ou atributos. Então vamos praticar esse conteúdo nessa questão.
Vamos criar um programa em JavaScript para entender classes, métodos, atributos e herança!

Classe Animal:
- Crie uma classe chamada Animal.
- Adicione dois atributos: nome e idade.
- Adicione um método descrever() que exiba no console uma descrição do animal com seu nome e idade.

Classe Gato (Herda de Animal):
- Crie uma classe chamada Gato que herda da classe Animal.
- Adicione um atributo extra cor específico para gatos.
- Adicione um método miar() que exiba no console o som que um gato faz.

Criando Animais:
- Crie dois objetos da classe Animal: um chamado cachorro e outro gato, com idades distintas.
- Para o gato, também defina a cor.

Chamando os Métodos:
- Para cada animal, chame o método descrever() para ver a descrição no console.
- Para o gato, chame o método miar() para "ouvir" o som que ele faz (é também para ver o som no console).

Dica: Utilize console.log() para exibir as informações!

```javascript
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
```
______

**9)** Vamos criar um programa em JavaScript para somar notas!

Classe SomadorDeNotas:
- Crie uma classe chamada SomadorDeNotas.
- Adicione um atributo total inicializado com 0 para armazenar a soma das notas.

Método adicionarNota:
- Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
- Este método deve receber um parâmetro nota e somá-lo ao atributo total.

Criando o Somador e Adicionando Notas:
- Crie um objeto da classe SomadorDeNotas, chamado somador.
- Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.

Chamando o Método para Ver o Total:
- Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.

Dica: Utilize console.log() para exibir as informações!

```javascript
class SomadorDeNotas {
    constructor (total) {
        this.total = 0;
    };
    adicionarNota(nota) {
        for (var i = 0; i <= 3; i++) {
            this.total += nota[i];
        };
        return this.total
    };
}
var somador = new SomadorDeNotas;
console.log(`Total das notas: ${somador.adicionarNota([9, 4, 6, 7])}`);
```
______

**10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

Funcionário:
- atributo: Nome
- atributo: Idade
- atributo: Salário base
- método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

Professor (herança de Funcionário):
- atributo: Disciplina
- atributo: Horas de aula por semana
- método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
- Dois objetos do tipo Professor com informações fictícias.
- Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

```javascript
//criando a classe funcionário
class Funcionario {
    /* construindo os atributos que serão utilizados por (ou seja, que são importantes para) essa classe
    Funcionario */
    constructor(nome, idade, salarioBase) {
        //como tratado na questão, são criados e definidos os atributos nome, idade e salário base
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    };
};
/* até aqui, foram definidos os atributos nome, idade e salário base que são usados para qualquer
funcionário */

/* criando a classe professor como herdeira da classe funcionário, ou seja, como possuindo atributos em
comum com essa classe */
class Professor extends Funcionario {
    /* construindo os atributos que serão utilizados nessa classe (inclusive os que foram herdados da 
    classe mãe) */
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        //designa-se os atributos da classe mãe que serão utilizados nessa classe
        super(nome, idade, salarioBase);
        //define-se os atributos que são novos dessa classe (ou seja, que não existiam na classe mãe)
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }

    /* até aqui, foi criada uma nova classe professor, que é um tipo de funcionário, mas que possui
    atributos a mais, sendo eles disciplina e horas de aula por semana */

    /* cria-se o método calcularSalario, que possui um atributo próprio que se refere ao valor da hora
    de aula do professor */
    calcularSalario(valorHoraAula) {
        /* o método calcula o salário base do professor multiplicando o valor da hora de aula dele pela
        quantidade de horas trabalhadas por semana e, então, por 4, já que um mês contém 4 semanas */
        this.salarioBase=valorHoraAula*this.horasAula*4
        /* além disso, o método imprime no console um texto explicitando os dados definidos pelos
        atributos criados anteriormente */
        console.log(`Este é ${this.nome}, ${this.idade} anos, professor de ${this.disciplina}. Trabalhando ${this.horasAula} horas por semana e com um valor de hora de aula de R$ ${valorHoraAula.toFixed([2])}, seu salário é R$ ${this.salarioBase.toFixed([2])}`)
    }
}

//criam-se as variáveis que armazenarão os dados dos professores
//note que, onde deveria estar o salario base do professor, é armazenado o valor undefined
var professor1 = new Professor ('Jorge', 34, undefined, 'Programação', 40);
var professor2 = new Professor ('Pierre', 27, undefined, 'Design', 20);

/* finalmente, chama-se o método calcularSalario com base nas variáveis que armazenam os dados dos
professores, também adicionando-se o dado do valor da hora de aula do respectivo professor */
professor1.calcularSalario(50);
professor2.calcularSalario(70);
```