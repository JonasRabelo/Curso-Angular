function gerar(){
    let number = document.getElementById('numbertxt')
    if (number.value.length == 0){
        window.alert("[ERRO] Informe um número!")
    }else{
        number = Number(number.value)
        var result = document.getElementById('result')
        for(let i = 1; i <= 10; i++){
            result.innerHTML += `<option>${i} x ${number} = ${number * i}</option><br>` 
        }
    }
}