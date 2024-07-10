function sort(vetor, comparacao){
    return bubbleSort(vetor, comparacao);
}

function bubbleSort(vetor, comparacao){
	for(let i = 0; i < (vetor.length); i++){
		for(let j = 0; j < (vetor.length)-i; j++){
			if(comparacao(vetor[j], vetor[j+1])){
				aux = vetor[j];
				// Troca de variáveis através de espaço auxiliar O(1)
				vetor[j] = vetor[j+1]; vetor[j+1] = aux;
			}
		}
	}
	return vetor;
}

function crescente(x, y){
	return (x > y);
}

function decrescente(x, y){
	return (x < y);
}

function crescente_impares(x, y){
	if(x % 2 != 0 && y % 2 != 0){
		return (x > y);
	}
}

function decrescente_pares(x, y){
	if(x % 2 == 0 && y % 2 == 0){
		return (x < y);
	}
}