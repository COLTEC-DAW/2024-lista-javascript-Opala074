function countChars(frase, c){
    let sum;
    
    for(let i = 0; i < frase.length; i++){
        sum += (frase.charAt(i) === c ? 1 : 0);
    }
    return sum;
}