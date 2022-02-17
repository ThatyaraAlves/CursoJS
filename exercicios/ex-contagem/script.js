function contar(){
    let i = document.getElementById('inicio').value
    let f = document.getElementById('fim').value
    let p = document.getElementById('passo').value
    let res = document.querySelector('div#res')

    let inicio = Number(i)
    let fim = Number(f)
    let passo = Number(p)

    // etapa de verificação 
    let booleanoDeVerificação = inicio == null || fim == 0
    if(booleanoDeVerificação){
        res.innerHTML = 'Não há nada para contar'
    }
    else if(passo == 0){
        passo = 1
        alert('Passo inválido! Considerando passo 1')
    }
    // etapa de contagem
    
        var lista = [] 
        for(var contador = inicio; contador <= fim; contador += passo){
            console.log(contador)
            lista.push(contador) // aqui eu resolvi o problema colocando o contador em um array
            
            
            
        }
        res.innerHTML = `Contando... ${lista}`
    }




