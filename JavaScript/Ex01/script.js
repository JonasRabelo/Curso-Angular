function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#A77C3A'
    }else if (hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#326A89'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#263328'
    }
}