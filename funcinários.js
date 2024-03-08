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