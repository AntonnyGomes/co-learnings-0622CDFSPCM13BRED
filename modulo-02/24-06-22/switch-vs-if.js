let dia = 'terca-feira';
let hora = 9;

switch(dia) {
    case 'terca-feira':
    case 'quinta-feira':
    case 'sexta-feira':
        console.log('Hoje tem aula!');
        break;
    default:
        console.log('Hoje não tem aula!');
}

if (dia === 'terca-feira' && hora >= 9) {
    console.log('Estou em horario de aula');
}
