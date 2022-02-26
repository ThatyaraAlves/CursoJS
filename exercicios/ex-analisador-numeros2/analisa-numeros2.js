    let num = document.getElementById('num')
    let lista = document.getElementById('tab')
    let res =  document.getElementById('res')
    let valores = []

    
    // Validações
    function isNumero(n){
        
        if (Number(n) >= 1 && Number(n) <= 100){
            return true
        }
        else {
            return false
        }
    }
    function inLista(n, l){ 
        if(l.indexOf(Number(n)) != -1){ // se o indexOf dá -1 é pq o item não foi encontrado na lista
            return true
        }
        else{
            return false
        }
    }

    // Adicionando os números
    function adicionar(){
        lista.disabled = false
        if(isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
            

        }
        else{
            alert('Número inválido ou já adicionado')
        }
        num.value = ''
        num.focus()
    }
    
    function finalizar(){
        if (valores.length == 0 ){
            alert('Adicione valores antes de fihalizar')
        }
        else{
            let total = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior){
                    maior = valores[pos]
                }
                if (valores[pos] < menor){
                    menor = valores[pos]
                }
            }
            media = soma / total
            
            res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p> `
            res.innerHTML += `<p>O menor numero é o ${menor}</p> `
            res.innerHTML += `<p>O maior numero é o ${maior}</p> `
            res.innerHTML += `<p>A soma é ${soma}</p> `
            res.innerHTML += `<p>A média é ${media} </p>`

        }
    }