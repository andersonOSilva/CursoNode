const {
    get
} = require('axios')
// url base 
const URL = 'https://swapi.co/api/people'

async function obterPessoas(nome) {
    // monta url de pesquisa
    const url =  `${URL}/?search=${nome}&format=json`
    const result = await get(url)
    console.log(JSON.stringify(result.data));
    
    return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item) {
        return {
                nome:item.name,
                peso:item.height
    }
}
// const nome = 'r2-d2'
// obterPessoas(nome)
//     .then(console.log)


module.exports = {

    obterPessoas

}