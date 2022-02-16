function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear();
    var formularioAno = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if(formularioAno.value.length == 0 || formularioAno.value > anoAtual){
        alert('Verifique os dados e tente novamente')

    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img') // criando uma tag no html pelo javascript
        img.setAttribute('id', 'foto') // adicionando um id à tag img 
       
        
        function aumentaTela(){
            img.style.marginTop = '60px'
        }
        img.onmousemove= aumentaTela;

        if(sexo[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/menino-criança-pq.png')
            }
            else if (idade < 25){
                img.setAttribute('src', 'imagens/homem-jovem-pq.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto-pq.png')
            }
            else{
                img.setAttribute('src', 'imagens/homem-idoso-pq.png')
            }

        }
        else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/menina-criança-pq.png')
            }
            else if (idade < 25){
                img.setAttribute('src', 'imagens/mulher-jovem-pq.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta-pq.png')
            }
            else{
                img.setAttribute('src', 'imagens/mulher-idosa-pq.png')
            }
        }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
    }
}