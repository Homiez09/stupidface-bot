require("dotenv").config();

const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_PRESENCES, 
        Intents.FLAGS.GUILD_MEMBERS, 
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES
    ] 
});
const { DiscordTogether } = require('discord-together')

client.slash = new Collection();
client.commands = new Collection();
client.aliases = new Collection();
client.together = new DiscordTogether(client);

["loadEvents", "loadCommands"]
    .forEach(file => {
        require(`./handlers/${file}`)(client);
    });

client.login(process.env.TOKEN)