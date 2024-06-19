function mod2(divisor){
    if(divisor === 0){
        return true;
    } else if(divisor === 1){
        return false;
    }
    return mod2(divisor - 2);
}
function mod(divisor, dividendo){
   if(divisor > 1){
       return mod(divisor - dividendo, dividendo);
   }
    if(divisor === 0){
        return true;
    }
    return false;
}