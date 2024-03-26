function Contar(){
    
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var saida = document.getElementById('result')
    
    var p = -1
    if (passo.value.length == 0 || fim.value.length == 0 || inicio.value.length == 0){
        saida.innerHTML = 'Impossível contar...'
    }else{
        var p = Number(passo.value) 
        if (p <= 0){
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        var i = Number(inicio.value)
        var f = Number(fim.value)
        saida.innerHTML = " "
        var text = '' + i
        if (i < f){
            for (var cont = i + p; cont <= f; cont += p){
                text += " \u{1F449} " + cont
            }
        }else{
            for (var cont = i + p; cont >= f; cont -= p){
                text += " \u{1F449} " + cont
            } 
        }
        text += " \u{1F3C1}"
        saida.innerHTML = text
    }
}