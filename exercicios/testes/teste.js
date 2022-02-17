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
    // tentei fazer com while e não funcionou nao sei pq
     else{ 
        res.innerHTML = 'Contando'
         let contador = inicio
         while(contador <= fim){
            
            res.innerHTML += `&#x27A1 ${contador}` 
            contador += passo
             

         }
         
     }
}