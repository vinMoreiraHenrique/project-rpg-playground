namespace MeuProjeto
{
    public class Monster
    {
        public string Name { get; set; }

        public Monster(string name) : this()
        {
            Name = name;
        }

        public Monster()
        {
            Name = "Monster";
        }

        public void DisplayInfo()
        {
            Console.WriteLine($"--------------------------------------------------------\nNOME: {Name}\n--------------------------------------------------------");
        }
    }
}