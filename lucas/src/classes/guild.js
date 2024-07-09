import { readDatabase, writeDatabase } from "../write_database.js";

export class Guild {
  register_adventure(data) {
    const database = readDatabase();
    database.guild_adventurers.push({
      id: database.guild_adventurers.length + 1,
      name: data.name,
      occupation: data.occupation,
      level: data.level,
      exp: data.exp,
      rank: data.rank,
    })

    writeDatabase(database)

    console.log(`${data.name} foi registrado como um aventureiro do tipo ${data.occupation} de rank ${data.rank}!\n`);
  }
}
