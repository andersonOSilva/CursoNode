// quero o telefone das nova a partir do id 
// quero o endereco da nova para abatimento pelo id

// importamos um modulo interno do node js 
const util = require('util')
const obterenderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback){
    // se der bosta chama reject
    return new Promise(function resolverPromise(resolve,reject){
        
        setTimeout(() => {
            return resolve({
                id:1,
                nome:"vanusa",
                dataNascimento: new Date()
    
            })
        }, 1000);
    }) 
    // se der bom vem de resolve
}
function obterTelefone(idUsuario, callback ){
    return new Promise(function resolvePromise(resolve,reject) {
        setTimeout(() => {
            
            return resolve({
                telefone:'975539825',
                ddd:'11'
            })
        })
        
    }, 2000);
}
function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua:'Esquina das prima',
            numero:99
        })
    }, 2000);
}
// callbakc
function resolverUsuario(erro, usuario) {

    console.log('usuario',usuario);
    
    
}

// primeiro passo adicionar asyn na função e automaticamente ela retornara uma promisse
async function main() {
    try {
        console.time('medida exec da da promisse',)
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterenderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        
        
        console.log(`
        Nome: ${usuario.nome}
        Telefone: (${telefone.ddd})${telefone.telefone}
        Endereco: ${endereco.rua},${endereco.numero}`
        )

        console.timeEnd('medida exec da da promisse',)
        
    } catch (error) {
        console.error('fodeu',error)
    }
    
}
main()