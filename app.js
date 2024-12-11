console.log ('Juros Compostos - node.js')
var readline = require ('readline')
var JurosCompostos = readline.createInterface ({
    input: process.stdin,
    output: process.stdout 
})
JurosCompostos.question ('Digite seu capital inicial:', function (p){
    var CapitalInicial = p 

    JurosCompostos.question ('Digite sua taxa anual de juros em percentual:', function (r){
        var TaxaAnual = r

        JurosCompostos.question ('Digite o número de vezes que os juros são compostos por ano:', function (n){
            var JurosAno = n

            JurosCompostos.question ('Digite o tempo em anos:', function (t) {
                var TempoAnos = t

                var number = 'M = p*(1+r/n)**(n*t)'

                JurosCompostos.close()

                var parseFloat
                console.log (typeof (Number))
                var resultado = Number(p) * Number(1+r/n) ** Number(n) * (t)
                console.log ('O resultado do montante é:' + resultado)
                
            })
        })
    })
})