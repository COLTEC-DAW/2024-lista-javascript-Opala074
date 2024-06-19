let linha = parseInt(prompt("escreva o número de linhas"));

for(let i = 1; i <= linha; i++){
    if(i%2 === 1){
        console.log("# # # # ");   
    }
    else{
        console.log(" # # # #");
    }
}