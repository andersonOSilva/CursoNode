const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main() {
    Commander
    .version('mk1')
    .option('-n, --nome [value]',"Nome do heroi")
    .option('-p, --poder [value]',"Poder do heroi")
    .option('-i, --id [value]',"Id do heroi")
    .option('-c, --cadastrar ',"Cadastrar o heroi")
    .option('-l, --listar ',"Listar o heroi")
    .option('-r, --remover [value] ',"Remove o heroi")
    .option('-att, --atualizar [value] ',"Atualiza o heroi")
    .parse(process.argv)

    // converte o commando para heroi para realizar a inserção 
    const heroi = new Heroi(Commander)
    
    try {
            if (Commander.cadastrar) {
                delete heroi.id
                
                
                const resultado = await Database.cadastrar(heroi)
                if (!resultado) {
                    console.error('heroi nao cadastrado')
                    return;
                }
            }
            if (Commander.listar) {
                const resultado = await Database.listar()
                console.log(resultado);
                return;
                
            }
            if (Commander.remover) {
                const resultado = await Database.remover(heroi.id)
                console.log(heroi.id)
                
                if (!resultado) {
                    console.error('Nao removido')
                }
                console.log('Heroi obliterado com sucesso');
                
                return;
                
            }
            if (Commander.atualizar){
                const idParaAtualizar = parseInt(Commander.atualizar);
                
                // rataria para remover todas as chaves undefined do objeto
                const dado = JSON.stringify(heroi)
                const heroiAtualizar = JSON.parse(dado)

                const resultado = await Database.atualizar(idParaAtualizar,heroiAtualizar)
                if (!resultado) {
                    console.error('nada muda segue o jogo');
                    
                }
                console.log('heroi rebootado com sucesso');


            }
        } catch (error) {
            console.error('erro diz : - Eu sou inevitavel...')
        }
}

main()