function calcular(){
    
    let num = document.getElementById('numero').value
    let numero = Number(num)
    let res =  document.getElementById('tab')
    res.disabled = false
    
    
    if (num == ''){
        
        alert('Digite um número para que possamos calcular')
    }
    else{
        var option = document.getElementsByClassName('res1')
        var calculo = 1;
        res.innerHTML = ''
        while(calculo <=10){
            let item = document.createElement('option') //adicionando uma tag pelo JS 
            item.text = `${numero} x ${calculo} = ${numero * calculo}`
            item.value = `res${calculo}` // esse valor só é relevante para quando formos fazer formularios que funcionam 
            res.appendChild(item)
            calculo++
    }
    }
}