const discord = require("discord.js");
const { Poru } = require("poru");
require("dotenv").config()
const client = new discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS","GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
client.login(process.env.TOKEN).catch(e => console.log("No token provided"))


client.config = require("./config.json");
client.poru = new Poru(client, client.config.nodes,{
  spotify:{
   clientID:"cb41529dc3bd4d8f8a240dbee0fff4e8",
  clientSecret:"bcca82f42930498aa385a8289fdf276b"
   }
})
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.slash = new discord.Collection();

//now creating interaction event
["commands","events","slash","PoruEvent"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});




