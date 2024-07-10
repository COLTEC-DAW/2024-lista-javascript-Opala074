function cria(linhas, colunas, funcao) {
    let matriz = [];
    
    Array(linhas).fill().forEach((_, i) => {
		// Para cada linha i, preenchida com zeros, faça
        let vetor = [];
        Array(colunas).fill().forEach((_, j) => {
			// Para cada coluna j, preenchida com zeros, faça
            vetor.push(funcao(i, j));
        });
        matriz.push(vetor);
    });

    return matriz;
}
function somar(i, j){
    return i + j;
}
function multiplicar(i, j){
    return i * j;
}
function binario(i, j){
    return i == j ? 1 : 0;
}
function quadrado_e_divisao(i, j){
    return (i * i) / (j+1);
}
function comparar(i, j){
    return i > j ? 1 : (i < j ? 5 : 0); 
}