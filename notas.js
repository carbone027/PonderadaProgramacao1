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