//Laço while = equanto
var x =0;
document.write('<br><h3>testando loop com com WHILE</h3><br>');
while(x<=5){
    document.write('<br> O valor de x é:' +x);
    x=x+1;
}

//Laço for = para
var controle = 10
document.write('<br><h3>Testando loop com FOR</h3>');
for(a=0;a<5;a++){
    document.write('<br> O valor de a é:' +a);    
}

//laço switch = escolha
//criar a função pedir()
function pedir(){
    //alert(" A casa caiu mano");
    var valor = prompt("Digite a opção de 1 a 4");
    //console.log(valor);
    //console.log(typeof(valor));
    //console.log(Number(valor));
    //console.log(typeof(Number (valor)));

    switch(Number(valor)){
        case 1:
            alert("Você escolheu suco")
            break;
        case 2:
            alert("Você escolheu água gelada")
            break;
        case 3:
            alert("Você escolheu sorvete")
            break;
        case 4:
            alert("Você está chamando garçom")
            break;
        default:
            alert("Digite entre 1 a 4");
            break;    
    }

}