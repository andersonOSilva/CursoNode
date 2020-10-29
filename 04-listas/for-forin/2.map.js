const service = require('./service')
// para subistituir uma unção global do javascript dizendo que meumap agr é umas funçao padrao para todas as listas
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++){
        const resultado = callback(this[indice],indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}



async function main() {
    try{
        const results = await  service.obterPessoas('a')
        // ---------------------
        // foreach
        // const names = [] //variavel externa
        // results.results.forEach((item) => {
        //     names.push(item.name)
            
        // });
        // console.log(results);
        // ----------------------

        // o map diferente do foreach é autosuficiente dessa forma tudo que voce precisa é fazer o que vc precisa com cada item da lista sem depender de variaveis externas 
        // const names = results.results.meuMap( (pessoa) => pessoa.name )
        
        const names = results.results.meuMap(function (pessoa, indice){
            
            
            return `|${indice}|${pessoa.name}`
        })
        
        
        
        console.log('names',names);
        
    }
    catch(error){
        console.error('fodeu',error)
    }
}

main()