const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

// Função que adiciona uma mensagem no arquivo de log
function adicionarLog(nomeAluno) {
    const idUnico = uuidv4();
    const dataHora = new Date().toLocaleString();
    const mensagem = `${idUnico} - ${dataHora} - ${nomeAluno}\n`;
    fs.appendFile('logs.txt', mensagem, (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
        } else {
            console.log('Log adicionado com sucesso.');
        }
    });
}


adicionarLog("Kauã Silva");




