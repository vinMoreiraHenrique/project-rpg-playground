namespace MeuProjeto
{
    public class AdventurerDatabase
    {
        public List<Adventurer> Adventurers { get; set; } = [];
        
        public bool AdventurerExists(Adventurer newAdventurer)
        {
            foreach (var adventurer in Adventurers)
            {
                if (adventurer.Name == newAdventurer.Name)
                {
                    return true;
                }
            }
            return false;
        }
    }

    public class MonsterDatabase
    {
        public List<Monster> Monsters { get; set; } = [];
    }
}

