function carregar() {
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
//var hora = 20
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src="imagens/morning-pq.png"
    document.body.style.background = '#cdb6a1'
}
else if(hora >= 12 && hora <= 18){
    //BOA TARDE
    img.src = "imagens/afternoon-pq.png"
    document.body.style.background = '#d39763'
}
else{
    img.src = "imagens/night.png"
    document.body.style.background = '#2c3137'
    //BOA NOITE
}

// essa parte eu peguei no curso de js da alura pra testar
function aumentaTela(){
    
    img.style.width = '51%';
    
    

}
function diminuiTela(){
    
    img.style.width = '50%';
    
    
}
img.onmousemove= aumentaTela;
img.onmouseout = diminuiTela;
}

