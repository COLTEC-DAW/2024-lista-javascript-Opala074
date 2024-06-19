let vetor = [1,2,3];

function toList(array){
    let list;

    for(let i = array.length-1; i >= 0; i--){
        list = { value: array[i], rest: list };
    }
    
    return list;
}

toList(vetor);