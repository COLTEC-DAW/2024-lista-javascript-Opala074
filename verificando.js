function verifica(numero, condicao){
	return condicao(numero);
}
function primo(n){
	for(let i = 2; i < n; i++){
		if(n % i == 0) return false;
	}
	return true;
}
function impar(n){
	if (n % 2 != 0){
		return true;
	} else {
		return false;
	}
}