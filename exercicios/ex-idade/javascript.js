function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear();
    
    var formularioAno = document.getElementById('ano')
    var res = document.querySelector('div#res')
    

    if (formularioAno.value.length == 0 ||  Number(formularioAno.value) > anoAtual){

        window.alert('Verifique os dados e tente novamente')
    }
    else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(formularioAno.value) 
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let crianca = idade >=0 && idade <= 10
        let adolescente = idade < 18;
        let jovem = idade < 25
        let adulto = idade < 50
        

        if (sexo[0].checked){
            genero = 'Homem'
            if (crianca){
                img.setAttribute('src', 'imagens/menino-criança-pq.png')
            }
            else if(adolescente){
                img.setAttribute('src', 'imagens/adolescente-homem.png')
            }
            else if(jovem){
                img.setAttribute('src','imagens/homem-jovem-pq.png')
            }
            else if(adulto){
                img.setAttribute('src','imagens/homem-adulto-pq.png')
            }
            else{
                img.setAttribute('src','imagens/homem-idoso-pq.png')
            }
        }
        else if(sexo[1].checked){
            genero='Mulher'
            if (crianca){
                img.setAttribute('src', 'imagens/menina-criança-pq.png')
            }
            else if(adolescente){
                img.setAttribute('src', 'imagens/adolescente-mulher.png')
            }
            else if(jovem){
                img.setAttribute('src','imagens/mulher-jovem-pq.png')
            }
            else if(adulto){
                img.setAttribute('src','imagens/mulher-adulta-pq.png')
            }
            else{
                img.setAttribute('src','imagens/mulher-idosa-pq.png')
            }
        }
        
        
        
        
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}