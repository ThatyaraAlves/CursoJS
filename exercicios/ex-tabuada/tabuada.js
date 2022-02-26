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
        var calculo = 0;
        
        for(var i = 0; i <= 10; i++){
            option = document.getElementsByClassName('res1')[i]
            calculo = numero * i
            option.innerHTML = `${numero} * ${i} = ${calculo}`
            calculo = numero * i
            
        }
}
    }
