const calculadora = {
    historico: [],

    soma: function(a, b) {
        const resultado = a + b;
        this.historico.push(`${a} + ${b} = ${resultado}`);
        return resultado;
    },

    subtrair: function(a, b) {
        const resultado = a - b;
        this.historico.push(`${a} - ${b} = ${resultado}`);
        return resultado;
    },

    verHistorico: function() {
        for (let i = 0; i < this.historico.length; i++) {
            console.log(this.historico[i]);
        }
    }
};

console.log(calculadora.soma(100, 20));
console.log(calculadora.subtrair(50, 15));
console.log(calculadora.soma(8, 2));

calculadora.verHistorico();