function criptografia(cifra){
	return function(string, troca){
		return cifra(string, troca);
	}
}
function cifraCesar(string, n){
	// String -> Array
	let str = string.split('');
	
	for(let i = 0; i < string.length; i++){
		// str é um array, str[i] é uma string (de 1 caracter)
		let c = str[i].charCodeAt(0);
		
		if(c >= 65 && c <= 90){
			str[i] = String.fromCharCode(((c-65+n)%26) + 65);
		}
		if(c >= 97 && c <= 122){
			str[i] = String.fromCharCode(((c-97+n)%26) + 97);
		}
	}
	// Array -> String
	return str.join('');
}
cifraDeCesar = criptografia(cifraCesar);
cifraDeCesar("Ate tu, Brutus?", 2);