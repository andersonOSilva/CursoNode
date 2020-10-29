const service = require('./service')

async function main() {
    try{
        const result = await service.obterPessoas('a')
        const names = []
        console.time('for')
        console.log('for')
        for (let i =  0; i<= result.results.length - 1; i++){
            const pessoa = result.results[i]
            
            names.push(pessoa.name)
            
            
            
        }
        console.log('names',names);
        console.log('-----------------------')
        
        
        console.log('endfor')
        console.timeEnd('for')
        console.log('_________________________');
        
        
        console.log('forin')
        console.time('forin')
        var pessoa  = []
        for (let i in result.results){
            const pessoa = result.results[i]
            
            
            
            
        }
        names.push(pessoa.name)
        console.log('names',names);
        console.log('-----------------------')

        console.log('endforin')
        console.timeEnd('forin')
        console.log('_________________________');
        
        
        console.log('foroff')
        console.time('foroff')
        var pessoa  = []
        for (pessoa of result.results){
            
            
            names.push(pessoa.name)
            // console.log(name);
            
            
        }
        console.log('names',names);
        console.log('-----------------------')

        console.log('endforoff')
        console.timeEnd('foroff')
        console.log('_________________________');
        
        

    }catch(error){
        console.error('error intern0 - nenhum erro ocorreu',error)
    }
}
main()