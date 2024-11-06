// Função para calcular o saldo de vitórias e determinar o nível
function calcularNivel(vitorias, derrotas) {
    //Calcular o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
    
    //Armazenar o nível
    let nivel = "";

    //Definindo o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    //Retorna o saldo de vitórias
    return { saldoVitorias, nivel };
}

// Estrutura de repetição para continuar recebendo entradas
while (true) {
	//recebe inputs
	const vitorias = parseInt(gets());
	
    // Condição para sair do loop
    if (vitorias < 0) {
        break;  // Encerra o loop se o valor de vitórias for negativo
    }

	const derrotas = parseInt(gets());  // Lê o número de derrotas do jogador
	
	//excecuta a função e armazena o resultado dela
	const resultado = calcularNivel(vitorias, derrotas);
	
	// Exibe o resultado
	console.log(`O Herói tem de saldo de ${resultado.saldoVitorias}  e está no nível ${resultado.nivel}`);
}

