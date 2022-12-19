function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var razao = document.getElementById('razao')

    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || razao.value.length == 0) {
        window.alert('[ERRO] É impossivel fazer uma contagem com esses dados')
        res.innerHTML = 'Dados incompatíveis! \u{270B}\u{1F61B}\u{1F91A}'	
    }else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var r = Number(razao.value)

        if(r<=0){
            alert('Razao inválida! Consideramos razao de 1')
            r = 1
        }

        if(i<f){
            for(var c = i; c<= f; c+=r){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = i; c>=f; c-=r){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1} \u{270B}\u{1F61B}\u{1F91A}`
    }
}
