function load(){
    var nome = prompt("Qual seu nome?"); //funciona o questionamento, armazenamento e resposta //


}

function clicou_data(){
    var d = new Date(); // mostra o dia, hora e fuso //
    alert(d);
}
function clicou_idade(){
    var idade = prompt("Qual sua idade?");
        if(idade>18){
            alert(nome + " tem " + idade + " anos. É maior de idade.");
        }else {  
            alert("Menor de idade");
        };
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar.";
}

function pix(){
    alert("Chave aleatória 9444942c-dd7e-4e03-9fe0-04f60ef37f62");
}

function redirect(){
    //window.open("index.html");  abre nova pagina apenas //
    window.location.href = "index.html"; // abre na mesma guia //
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Agora passa um PIX!!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Clique aqui para sair."
}

/*
function soma(variavel, variavel){
    return variavel + variavel;
}
alert(soma(valor da variavel, valor da variavel));
*/

/*console.log(nome);
console.log(idade);
var lista = ["maçã", "pêra", "uva"];
 lista.push("") tira da lista
lista.pop("") coloca na lista
console.log(lista[2]); mostra o item da lista
console.log(lista.join ("")) o caractere entre aspas eh o que serpara a lista

*/