/*console.log('Hello World');

let nomeDeUsuario = prompt('Qual o seu nome?');
let idade = prompt('Qual o sua idade?');
let programador = confirm('Você é programador?');

alert('Olá ' + nomeDeUsuario + ' sua idade é ' + idade + ' anos.');

if(programador) {
    alert('Você é um programador, Prabens!')
}
else if (Number(idade) >= 16 && Number(idade) <= 25){
    alert('Que pena, você ja ouviu falar da estação hack?')
}

else{
    alert('Que pena, você deveria aprender javascript, ele é muito legal.')
}*/

let aluno = prompt('Qual o seu nome?');
let materia = prompt('Qual a metéria?');
let nota = prompt('Qual a sua nota?');

let media = 6;

if(Number(nota) >= media || Math.round(nota)) {
    alert(`${aluno} parabens você foi aprovado na matéria de ${materia}`);
    
}

else{
    alert(`Sinto muito ${aluno} você foi reprovado na matéria ${materia}`);
}