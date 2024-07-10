function min(a, b){
    return (a < b ? a : b);
}

function max(a, b){
    return (a > b ? a : b);
}

let a = parseInt(prompt("Insira o numero a"));
let b = parseInt(prompt("Insira o numero b"));
console.log(min(a,b));
console.log(max(a,b));