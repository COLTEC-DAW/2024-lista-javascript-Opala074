function __char(c){
	if(typeof(c) == 'number'){
		return String.fromCharCode(c);
	}
}
function transforma(transformacao){
	return function(string){ 
		return transformacao(string);
	};
}
function caixa_alta_vogal(s){
	let str = s.split('');
	
	for(let i = 0; i < s.length; i++){
		let c = str[i].charCodeAt(0);
		
		if(c >= 97 && c <= 122){
			if(__char(c) == 'a' || __char(c) == 'e' || __char(c) == 'i' || __char(c) == 'o' || __char(c) == 'u'){
				str[i] = String.fromCharCode(c-32);
			}
		}
	}

	return str.join('');
}
function caixa_alta_consoante(s){
	let str = s.split('');
	
	for(let i = 0; i < s.length; i++){
		let c = str[i].charCodeAt(0);
		
		if(c >= 97 && c <= 122){
			if(__char(c) != 'a' && __char(c) != 'e' && __char(c) != 'i' && __char(c) != 'o' && __char(c) != 'u'){
				str[i] = String.fromCharCode(c-32);
			}
		}
	}
	return str.join('');
}
function caixa_baixa_vogal(s){
	let str = s.split('');
	
	for(let i = 0; i < s.length; i++){
		let c = str[i].charCodeAt(0);

		if(c >= 65 && c <= 90){
			if(__char(c) == 'A' || __char(c) == 'E' || __char(c) == 'I' || __char(c) == 'O' || __char(c) == 'U'){
				str[i] = String.fromCharCode(c+32);
			}
		}
	}
	return str.join('');
}
function caixa_baixa_consoante(s){
	let str = s.split('');
	
	for(let i = 0; i < s.length; i++){
		let c = str[i].charCodeAt(0);

		if(c >= 65 && c <= 90){
			if(__char(c) != 'A' && __char(c) != 'E' && __char(c) != 'I' && __char(c) != 'O' && __char(c) != 'U'){
				str[i] = String.fromCharCode(c+32);
			}
		}
	}
	return str.join('');
}