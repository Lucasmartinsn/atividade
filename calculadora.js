function calculadora(){
    var altura = (document.getElementById("altura").value)/100
    var peso = document.getElementById("peso").value

    var resultado = peso/(altura*altura);

    if (resultado<18.5){
        window.alert("o baixo do peso")
    }else if(resultado<24.9){
        window.alert("Pesso ideal(continui assim)")
    }
    else if(resultado<29.9){
        window.alert("você estar com SOBREPESO")
    }
    else if(resultado<39.9){
        window.alert("você estar OBESIDADE")
    }
    else if(resultado>40.0){
        window.alert("OBESIDADE Grave(procure um medico")
    }
}