function gerarNumeroAleatorio(numMinimo, numMaximo){

    var numMinimo = parseInt(document.getElementById("iptMinimo").value);
    var numMaximo = parseInt(document.getElementById("iptMaximo").value);    
    var numeroGerado = Math.floor((Math.random() * numMaximo) + numMinimo);

    while (numeroGerado > numMaximo){
        numeroGerado = Math.floor((Math.random() * numMaximo) + numMinimo);
    }

    document.getElementById("numeroGerado").innerText = numeroGerado;
}