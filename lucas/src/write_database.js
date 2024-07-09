import fs from 'fs';

const databaseFilePath = './src/database/database.json';

// Função para ler o banco de dados
const readDatabase = () => {
  const data = fs.readFileSync(databaseFilePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever no banco de dados
const writeDatabase = (data) => {
  fs.writeFileSync(databaseFilePath, JSON.stringify(data, null, 2), 'utf8');
};

export { readDatabase, writeDatabase };
