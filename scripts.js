function gerarNumeroAleatorio(numMinimo, numMaximo){

    var numMinimo = parseInt(document.getElementById("iptMinimo").value);
    var numMaximo = parseInt(document.getElementById("iptMaximo").value);    

    if(numMinimo < 0){

        var numeroGerado = Math.floor((Math.random() * (numMaximo - (2 * numMinimo)) + numMinimo));

        while (numeroGerado > numMaximo){                             
            numeroGerado = Math.floor((Math.random() * (numMaximo - (2 * numMinimo)) + numMinimo));
        }
    }
    else{

        var numeroGerado = Math.floor((Math.random() * ((numMaximo + 1) - numMinimo)) + numMinimo);
    
        while (numeroGerado > numMaximo){                             
            numeroGerado = Math.floor((Math.random() * ((numMaximo + 1) - numMinimo)) + numMinimo);
        }
    }

    document.getElementById("numeroGerado").innerText = numeroGerado;
}