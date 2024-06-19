const obj1 = {
    a: "bagos",
};
const obj2 = {
    a: "bagus",
    b: "cricket",
};

function deepEquals(obj1, obj2){
    if(obj1 === obj2) return true;

    if((obj1 != null && typeof(obj1) == "object") && (obj2 != null && typeof(obj2) == "object")){
        if(Object.keys(obj1).length != Object.keys(obj2).length){
            return false;
        }
        for(let prop in obj1){
            if(Object.hasOwn(obj1, prop)){
                if(!deepEquals(obj1[prop], obj2[prop])) return false;
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}

deepEquals(obj1, obj2);