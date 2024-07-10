    let string = prompt("Insira sua string");

for(let i = 0; i < string.length; i++){
    var verdadeiro = string.charAt(i) === string.charAt(string.length - 1 - i);
    if(!verdadeiro){
        console.log("Nao eh palindromo");
        break;
    }
}
if(verdadeiro) console.log("Eh palindromo");