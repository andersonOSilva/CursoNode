//  esse tipo de import traz apenas o metodo de dentro da função por exemplo obter pessoas de dentro da service
const {obterPessoas} = require('./service')

Array.prototype.meuFilter = function (callback) {
    const lista = [ ]
    const item = this[index]
    for(index in this) {
        const result = callback(item, index, this)
        // caso result seja diferente de vazio vc sai da função (continue)
        if (!result) continue;
        lista.push(item)
    }
    
}
async function main() {
    try {
        const {
            results
        } = await  obterPessoas('a')

        const familiaLars = results.filter(function (item){
            // por padrao retorna um booleano que informa se mantem ou remove da ista 
            // para retornar um array apenas com objetos filtradis
            // se encontrar algo vai retornar o que encontrar se nao encontrar retorna menis 1
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result 
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)
        

    } catch (error) {
        console.log('fodeu',error);
        
    }
}
main()