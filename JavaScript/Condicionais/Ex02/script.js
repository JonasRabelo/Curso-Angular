function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'imagens/bebe_masc.jpg')
            }else if(idade <= 10){
                img.setAttribute('src', 'imagens/crianca_masc.jpg')    
            }else if(idade <= 18){
                img.setAttribute('src', 'imagens/adolescente_masc.jpg')
            }else if(idade <= 39){
                img.setAttribute('src', 'imagens/adulto_masc.jpg')
            }else if(idade <= 55){
                img.setAttribute('src', 'imagens/quarentao.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else{
            genero = "Mulher"
            if(idade >= 0 && idade <= 3){
                img.setAttribute('src', 'imagens/bebe_fem.jpg')
            }else if(idade <= 10){
                img.setAttribute('src', 'imagens/crianca_fem.jpg')
            }else if(idade <= 18){
                img.setAttribute('src', 'imagens/adolescente_fem.jpg')
            }else if(idade <= 39){
                img.setAttribute('src', 'imagens/adulto_fem.jpg')
            }else if(idade <= 55){
                img.setAttribute('src', 'imagens/quarentona.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }

}