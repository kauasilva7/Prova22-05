const fs = require('fs');


// Chama o uuid (tive que pesquisar sobre) pra fazer os id's unicos
const { v4: uuidv4 } = require('uuid');


// é pra adicionar a mensagem do registro no logs.txt
function adicionarLog(nomeAluno) {
    const idUnico = uuidv4();

    const dataHora = new Date().toLocaleString();

    const mensagem = `${idUnico} - ${dataHora} - ${nomeAluno}\n`;


    fs.appendFile('logs.txt', mensagem,'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo:', err);
        } else {
            console.log('Log adicionado com sucesso.');
        }
    });

}
//aqui eu coloco o nome do aluno que eu quero adicionar no log
adicionarLog("Kauã da silva miranda");











