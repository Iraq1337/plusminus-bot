const { Client, Collection, MessageEmbed, Intents, MessageActionRow, MessageButton, Message } = require('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.clone().then(newchannel => {
        newchannel.setPosition(message.channel.position);
        message.channel.delete()
        newchannel.send("aga")
    });
};
