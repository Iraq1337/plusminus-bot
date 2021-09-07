const { Client, Intents, MessageEmbed, Permissions, MessageCollector  } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return;
    
    var amount = args[0]||1;
    var user = message.mentions.members.first()
    message.channel.send('Searching for a gay to catch...  :eyes:').then(old => {
        message.channel.awaitMessages({user, max: amount}).then(coollet=>{
            //if(coollet.first().member.permissions.has('ADMINISTRATOR')) return;
            old.edit('https://cdn.discordapp.com/attachments/844978162807078973/884502528182595674/death1.png')
            message.channel.send('https://cdn.discordapp.com/attachments/844978162807078973/884502529449263104/death2.png')
        });
    });
}
