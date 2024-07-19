using System;

namespace MeuProjeto
{
    class Program
    {
        static void Main()
        {
            // Caminho do arquivo de banco de dados
            string filePath = "adventurer_database.json";

            // Carrega o banco de dados
            AdventurerDatabase database = JsonDatabaseHandler.LoadDatabase(filePath);

            // Parâmetros do novo aventureiro (exemplo)
            string name = "Borba";
            int level = 1;
            string vocation = "Knight";

            // Cria uma nova instância do Adventurer
            Adventurer hero = new(name, level, vocation);

            // Verifica se o aventureiro já existe
            if (!database.AdventurerExists(hero))
            {
                // Adiciona o novo aventureiro
                database.Adventurers.Add(hero);

                // Salva o banco de dados no arquivo
                JsonDatabaseHandler.SaveDatabase(database, filePath);

                Console.WriteLine($"Database updated and saved to {filePath}");
            }
            else
            {
                Console.WriteLine("Adventurer already exists in the database.");
            }

            // Itera sobre os aventureiros e exibe suas informações
            foreach (var adventurer in database.Adventurers)
            {
                adventurer.DisplayInfo();
            }
        }
    }
}