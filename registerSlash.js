require("dotenv").config()

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9")
const { readdirSync} = require("fs");
const path = require("path");

const commands = [];
readdirSync("./commands/").map(async dir => {
    readdirSync(`./commands/${dir}`).map(async (cmd) => {
        commands.push(require(path.join(__dirname, `./commands/${dir}/${cmd}`)));
    })
})

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

(async () =>{
    try {
        console.log("[SYSTEM] Started refreshing application (/) commands.");
        await rest.put( 
            // Global slashcommand => Routes.applicationCommands(process.env.CLIENT_ID), 
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );
        console.log('[SYSTEM] Successfully reloaded application (/) commands.');
    } catch (error){
        console.log(error);
    }
})();