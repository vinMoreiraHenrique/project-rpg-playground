namespace MeuProjeto
{
    public class Adventurer(string name, int level, string vocation)
    {
        // Propriedades do Adventurer
        public string Name { get; set; } = name;
        public int Level { get; set; } = level;
        public string Vocation { get; set; } = vocation;

        // Método para exibir informações do aventureiro
        public void DisplayInfo()
        {
            Console.WriteLine($"--------------------------------------------------------\nAVENTUREIRO:\n---------->\nNOME: {Name}\nLEVEL: {Level}\nVOCAÇÃO: {Vocation}\n<----------\n--------------------------------------------------------");
        }


    }
}