require("dotenv").config();

const { MessageEmbed } = require("discord.js");

module.exports = async(client, interaction) => {
    if (interaction.isCommand()){
        if (!client.slash.has(interaction.commandName)) return;
        if (!interaction.guild) return;
        const command = client.slash.get(interaction.commandName);

        try {
            if (command.permission){
                if (!interaction.member.hasPermission(command.permission)){
                    const embed = new MessageEmbed()
                        .setTitle('Access Denied')
                        .setColor("RED")
                        .setDescription(`You don't have perm ${command.permissions} to use this command!`)
                        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL());

                    interaction.reply({ embed: [embed] });

                }
            }

            if (command.ownerOnly){
                if (interaction.use.id !== process.env.OWNER_ID){
                    const embed = new MessageEmbed()
                        .setTitle('Access Denied')
                        .setColor("RED")
                        .setDescription(`You not owner the bot can't use this command!`)
                        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL());

                    interaction.reply({ embed: [embed] });

                }
            }
            command.run(interaction, client);

        }catch (e) {
            console.log(e)
            await interaction.reply(`{ content: "Something went wrong!", ephemeral: true }`);
        }
    }
}