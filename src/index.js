// Informações do herói
const nome_heroi = prompt("Digite o nome do herói: ");
const xp_heroi = parseInt(prompt("Digite a quantidade de XP do herói: "));

// Estruturas de decisão
let nivel;
if (xp_heroi < 1000) {
    nivel = "Ferro";
} else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
    nivel = "Bronze";
} else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
    nivel = "Prata";
} else if (xp_heroi >= 5001 && xp_heroi <= 50000) {
    nivel = "Ouro";
} else if (xp_heroi >= 500001 && xp_heroi <= 500000) {
    nivel = "Platina";
} else if (xp_heroi >= 5000001 && xp_heroi <= 50000000) {
    nivel = "Diamante";
} else {
    nivel = "Nível não definido";
}

// Mensagem para o jogador
const mensagem = `O herói ${nome_heroi} está no nível ${nivel}.`;

// Exibição da mensagem aqui
console.log(mensagem);