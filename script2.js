let quantidade = Number(prompt('Quantos lances?'));

while(isNaN(quantidade)){
    quantidade = prompt(`Você digitou um valor incorreto, digite novamente com um valor númerico.`)
}


let caractere = prompt('Qual material?');
let lances = '';

//let material = prompt('Qual material gostaria de utilizar?');

while(lances.length <= quantidade){
    lances += caractere;
    console.log(lances);
};