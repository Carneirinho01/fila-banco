//Nome : Alexandre Carneiro Santos
//R.A : 21142724-5


var listaP = [];
var listaR = [];
var listaC = [];

var retirador;
var senhaAtual;
var contador = 1;
var mostraCaixas;

function retiraSenha(btn) {
    
    if (btn == "comum") {
        retirador= listaC.push('C-'+contador);
        document.getElementById('texto2').innerHTML = `Sua senha é: C-${retirador}`
    }
    else if(btn == "rapido") {
        retirador = listaR.push('R-'+contador);
        document.getElementById('texto2').innerHTML = `Sua senha é: R-${retirador}`
    }
    else if ( btn == "prioritario") {
        retirador = listaP.push('P-'+contador);
        document.getElementById('texto2').innerHTML = `Sua senha é: P-${retirador}`
    }

    contador++; 
    
}


function chamaCliente(caixa) {
    switch(caixa) {
        case 1:
            
            if (listaP.length > 0) {
                senhaAtual = listaP.shift();
                
            }
            else if (listaR.length > 0) {
                senhaAtual = listaR.shift();
            }
            else if (listaC.length > 0) {
                senhaAtual = listaC.shift();
            }
            else {
                senhaAtual = null ;
            }
            document.getElementById('respCaixas').innerHTML = `caixa 1`
            break;

        case 2:
            if(listaR.length > 0) {
                senhaAtual = listaR.shift();

            }else if (listaP.length > 0) {
                senhaAtual = listaP.shift();

            }else if(listaC.length > 0 ) {
                senhaAtual = listaC.shift();

            }else{
                senhaAtual =null ;
            }
            document.getElementById('respCaixas').innerHTML = `caixa 2`
            break;

        case 3:
            if(listaR.length > 0) {
                senhaAtual = listaR.shift();

            }else if (listaP.length > 0) {
                senhaAtual = listaP.shift();

            }else if(listaC.length > 0 ) {
                senhaAtual = listaC.shift();

            }else{
                senhaAtual = null ;
            }
            document.getElementById('respCaixas').innerHTML = `caixa 3`
            break;

        case 4:
            if (listaC.length > 0) {
                senhaAtual = listaC.shift();

            } else if( listaP.length > 0) {
                senhaAtual = listaP.shift();

            }else if (listaR.length > 0) {
                senhaAtual = listaR.shift();

            }else{
                senhaAtual = null ;
            }
            document.getElementById('respCaixas').innerHTML = `caixa 4`
            break;
        default:
            break;
    }

    document.getElementById("resp").innerHTML = senhaAtual;
}