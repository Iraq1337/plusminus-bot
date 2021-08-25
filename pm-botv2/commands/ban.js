const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
	if(!message.member.roles.cache.some(a => a.name == "bot-adminperm") && !config.allowed.includes(message.author.id))
    {
        message.channel.send('not allowed!')
        return;
    }
    
    if(message.mentions.members.first())
    {
        var reason = message.content.slice('!ban '.length).slice(message.mentions.members.first().toString().length).split('>').join(' ');
        message.mentions.members.first().ban({reason : reason});
    }
    else{
        message.reply('please mention a user!')
    }
};
module.exports.help = {
	name: "ban",
	usage: "ban @User",
};