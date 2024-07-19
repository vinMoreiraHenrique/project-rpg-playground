using System;
using System.IO;
using System.Text.Json;

namespace MeuProjeto
{
    public static class JsonDatabaseHandler
    {
        public static AdventurerDatabase LoadDatabase(string filePath)
        {
            try
            {
                if (File.Exists(filePath))
                {
                    string jsonFromFile = File.ReadAllText(filePath);
                    var database = JsonSerializer.Deserialize<AdventurerDatabase>(jsonFromFile);

                    // Verifica se a desserialização retornou null
                    if (database != null)
                    {
                        return database;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao carregar o banco de dados: {ex.Message}");
            }

            // Retorna um novo objeto de AdventurerDatabase em caso de falha
            return new AdventurerDatabase();
        }

        public static void SaveDatabase(AdventurerDatabase database, string filePath)
        {
            try
            {
                string jsonString = JsonSerializer.Serialize(database);
                File.WriteAllText(filePath, jsonString);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao salvar o banco de dados: {ex.Message}");
            }
        }
    }
}
