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
            numero:0
        })
    }, 2000);
}
// callbakc
function resolverUsuario(erro, usuario) {

    console.log('usuario',usuario);
    
    
}


// para manipular o sucesso usamos . then para manipular erros usamos catch
const usuariPromise=obterUsuario()
usuariPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then (function resolverTelefone(result) {
            return {
                usuario:{
                    nome:usuario.nome,
                    id:usuario.id
                },
                telefone: result
            }
            
        })
        
    })
    .then(function (resultado) {
        const endereco = obterenderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                
                    nome: resultado.usuario, 
                    telefone: resultado.telefone,
                    endereco:result
                }
            
        })
        
        
        
    })
    .then(function (resultado) {
        console.log('resultado',resultado);
        console.log(`
            Nome: ${resultado.nome.nome}
            Endereco: ${resultado.endereco.rua},${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}`)
        
        
    })
    .catch(function (error) {
        console.error('deu coco');
        
        
    })

    
// const telefone = obterTelefone(usuario.id)

// console.log('usuario',usuario);
// console.log('tefelone',telefone);
// function resolverUsuario(erro,usuario){
    
    
    
//     if(erro){
        
//         console.error('DEU RUIM Usuario',erro);
//         return;
        
//     }

//     obterTelefone(usuario.id,function resolverTelefone(erro1, telefone){
        
//         if(erro1){
//             console.error('DEU RUIM TEFELONE',erro1);
//             return;
//         }
//         obterEndereco(usuario.id,function resolverEndereco(erro2, endereco){
            
//             if(erro2){
//                 console.error('DEU RUIM ENDERECO',erro2);
//                 return;
//                 }

//             console.log(`
//             Nome: ${usuario.nome}
//             Endereco: ${endereco.rua},${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}`)
                 
//             })

//     })
// })