function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 8 /*data.getHours()*/
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <= 12){
    //BOM DIA!!
    img.src ='manha.jpg'
    document.body.style.background = 'rgb(133, 44, 200)'
}else if ( hora >= 12 && hora <=18){
    img.src='tarde.jpg'
}else {
    img.src= 'noite.jpg'
}


}
