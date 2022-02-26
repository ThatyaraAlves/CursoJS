let lista = []
function adicionar(){
    
    
    var num = document.getElementById('num').value
    var numero = Number(num)
    var res =  document.getElementById('tab')
    res.disabled = false

    if (num == '' || numero > 100 || numero < 0 || lista.includes(numero)){
        alert('Número inválido ou já incluso')
    }

    else{
            lista.push(numero)
            console.log(lista)
            let item = document.createElement('option') //adicionando uma tag pelo JS 
            item.text = `Valor ${numero} adicionado`
            res.appendChild(item)
        
               

}
}

function finalizar(){
    
    
    let resultado = document.getElementById('resultado')
    let maiorNumero = 0
    let menorNumero = Infinity 
    
    
    
        for(item in lista){
            
            if(lista[item] > maiorNumero){
                console.log(lista[item])
                maiorNumero = lista[item]
                
            }
            if(lista[item] < menorNumero){
                console.log(lista[item])
                menorNumero = lista[item]
                
            }
     }

    let soma = 0
    for(item in lista){
        soma += lista[item]
    }

    let media = soma / lista.length
    
   
    
    resultado.innerHTML = `<p>Ao todo temos ${lista.length} elementos cadastrados</p> 
    <p>O maior valor informado foi o ${maiorNumero}</p> <p>O menor valor informado foi o ${menorNumero}</p>
    <p>Somando todos os valores temos ${soma}</p> <p>A média dos valores digitados é ${media}</p>
    `
    
    

}
