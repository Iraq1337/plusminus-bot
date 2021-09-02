const { Client, Collection, MessageEmbed, Intents, MessageActionRow, MessageButton, Message } = require('discord.js');

module.exports.run = (client, message, args) => {
    let testy = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('yes')
            .setLabel('Yes, I am!')
            .setStyle('SUCCESS'),
            

        
        new MessageButton()
        .setCustomId('no')
        .setLabel("No, I'm not!")
        .setStyle('DANGER')
        )
    message.reply({content: "Are you sure you want to ban this user?",ephemeral: true,components: [testy] })
};
