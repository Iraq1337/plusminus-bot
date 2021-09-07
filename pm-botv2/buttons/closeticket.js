const { Client, Intents, MessageEmbed, Permissions, MessageReaction, MessageActionRow } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, i) => {
    i.reply({content: "Deleting Ticket in 5 seconds!"}).then(() => {
        setTimeout(() => {
            i.channel.delete();
        }, 5000);
    })
};