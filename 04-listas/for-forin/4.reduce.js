const {obterPessoas} = require('./service')



Array.prototype.meuReduce = function (callback, valorInicial) {

    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]

    for ( let index = 0; index<= this.length; index ++){
        valorFinal = callback(valorFinal, this[index], this)

    }
    return valorFinal
    
}




async function main() {
    try {
        const {results} = await obterPessoas('a')
        const pesos= results.map(item => parseInt(item.height))
        
        console.log(pesos);
        
        // const total = pesos.reduce((anterior,proximo) => {
        //     return anterior + proximo
        // })

        const minhaLista =  [
            ['Salada','Filé'],
            ['arroz', 'feijao']

        ]

        total = minhaLista.meuReduce((anterior,proximo)=>{
            return anterior.concat(proximo)// concactena listas  nesse exemplo faz a fusão das listas
        },[]).
        join(',')//transforma tudo em uma string separada por ,     
        console.log(total);
        
    } catch (error) {
        console.error('fodeu',error)
        
    }
    
}
main()