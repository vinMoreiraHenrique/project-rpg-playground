import { Adventurer } from "./classes/adventurer.js"
import { Guild } from "./classes/guild.js"


const guild = new Guild()

const adventurer = new Adventurer({
  name: "Lucas", 
  adventureClass: "Guerreiro"
})

adventurer.me()
adventurer.statistics()
