// quero o telefone das nova a partir do id 
// quero o endereco da nova para abatimento pelo id

function obterUsuario(callback){
    setTimeout(() => {
        return callback(null,{
            id:1,
            nome:"vanusa",
            dataNascimento: new Date()

        })
    }, 1000);
}
function obterTelefone(idUsuario, callback ){
    setTimeout(() => {
        return callback(null,{
            telefone:'975539825',
            ddd:'11'
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
// callback
function resolverUsuario(erro, usuario) {

    console.log('usuario',usuario);
    
    
}


obterUsuario(function resolverUsuario(erro,usuario){
    
    
    
    if(erro){
        
        console.error('DEU RUIM Usuario',erro);
        return;
        
    }

    obterTelefone(usuario.id,function resolverTelefone(erro1, telefone){
        
        if(erro1){
            console.error('DEU RUIM TEFELONE',erro1);
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(erro2, endereco){
            
            if(erro2){
                console.error('DEU RUIM ENDERECO',erro2);
                return;
                }

            console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}`)
                 
            })

    })
})
// const telefone = obterTelefone(usuario.id)

// console.log('usuario',usuario);
// console.log('tefelone',telefone);