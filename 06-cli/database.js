// imports
// --------------------------
// leiura de arquivo
const {
    readFile,
    writeFile
} = require('fs')
// conversor para promissi
const {
    promisify
} = require ('util')
// ---------------------------
// transformando  o metodo de leitura de arquivo em uma promissi

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database{
    
    constructor() {
    
         this.NOME_ARQUIVO = "herois.json"
        }

    async obterDadosArquivo(){
    
        
        // para qualquer formato de arquivo
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8')        
        
        
        
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true

    }
    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();

        const heroiComId = {
            id,...heroi
        }

        const  dadosfinal = [
            ...dados,heroiComId
        ]
        const resultado = await this.escreverArquivo(dadosfinal)

        return resultado
    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        
        
        const dadosfiltrados = dados.filter(item =>  (id ? item.id == id: true))
        
        return dadosfiltrados
    }
    async remover(id){
        
        if (!id){
            return await this.escreverArquivo([])
        }
        const dados  = await this.obterDadosArquivo()
        
        
        const indice = dados.findIndex(item => item.id == parseInt(id))
        if (indice == -1){
            throw Error('Deus fraco')
        }
        

        
        dados.splice(indice,1)
        
        
        return await this.escreverArquivo(dados)
        
    }
    async atualizar(id, modificacoes){
        
        
        const dados = await this.obterDadosArquivo()

        const indice = dados.findIndex(item => item.id == parseInt(id) )
        if (indice == -1){
            throw Error('o heroi nao existe ')

        }
        const atual = dados [indice]
        
        const objetoAtualizar = {
            ... atual,
            ... modificacoes
        }

        dados.splice(indice, 1)

        return await this.escreverArquivo([
            ... dados ,
            objetoAtualizar
        ])
        
    }
} 

module.exports = new Database()