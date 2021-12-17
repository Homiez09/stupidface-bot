const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Get user avatar with embed!',
    options: [
        {
            name: 'user',
            description: 'Mention user to get avatar!',
            type: 6,
        }
    ],
    run: async (interaction, client) => {
        const member = interaction.options.getUser('user') || interaction.member;
        const embed = new MessageEmbed()
            .setTitle(`${member.tag}'s Avatar`) 
            .setTitle(`${member.tag}'s Avatar`)
            .setURL(member.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setImage(member.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setFooter(`Requested By: ${interaction.user.tag}`, interaction.user.displayAvatarURL());

        interaction.reply({ embeds: [embed] });   
    }

}