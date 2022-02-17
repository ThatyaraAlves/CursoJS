function contar(){
    let i = document.getElementById('inicio').value
    let f = document.getElementById('fim').value
    let p = document.getElementById('passo').value
    let res = document.querySelector('div#res')

    let inicio = Number(i)
    let fim = Number(f)
    let passo = Number(p)

    // etapa de verificação 
    let booleanoDeVerificação = (inicio == null || fim == 0)
    let ehPossivel = true;
    if(booleanoDeVerificação){
        res.innerHTML = 'Não há nada para contar'
        ehPossivel = false
    }
    else if(passo == 0 && inicio != null && fim > 0){
        passo = 1
        alert('Passo inválido! Considerando passo 1')
        ehPossivel = true
    }
    // etapa de contagem
    // tentei fazer com while e não funcionou nao sei pq
     if(ehPossivel){
        res.innerHTML = 'Contando'
         let contador = inicio
         while(contador <= fim){
            
            res.innerHTML += `&#x27A1 ${contador}` 
            contador += passo
         }
 //acabou funcionando eu só tinha colocado  res.innerHTML errado
         }
         
     
}