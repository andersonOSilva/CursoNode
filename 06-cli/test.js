const {
    deepEqual,
    ok
} = require('assert')
const DEFAULT_ITEM_CADASTRAR = {
    nome:'flash',
    poder:'speed',
    id:1
}
const DEFAULT_ITEM_ATUALIZAR = {
    nome:'Lanterna Verde (Jhon Stewart)',
    poder:'O poder do Anel ( ͡° ͜ʖ ͡°)',
    id:2
}


const database = require('./database')
describe('suite de manipulação de herois ',() =>{
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })
    
    it('deve pesquisar um heroi usando arquivos', async() =>{

        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        deepEqual(resultado,expected)
    })
    it('deve se cadastrar um heroi usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(actual,expected)
    })
    it('deve remover item por id ', async() => {
        const expected = true
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(resultado,expected)

    })
    it('deve atualizar o heroi pelo id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome:'Batman',
            poder:'Dinheiro'
        }
        const atualizacao ={
            nome:'Batman',
            poder:'Dinheiro'
        }
        // console.log(atualizacao);
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id,atualizacao)
        // console.log(resultado);
        
        
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        console.log(resultado);
        
        deepEqual(resultado,expected)
        
    })
})