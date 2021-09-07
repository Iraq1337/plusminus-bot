const { Client, Intents, MessageEmbed, Permissions  } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.some(a => a.name == "bot-adminperm") && !config.allowed.includes(message.author.id))
    {
        message.channel.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`not allowed`)
            .setTitle('Error')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        return;
    }
    
    if(args.length <= 0) args[0] = 10;
    if(isNaN(args[0])) return;

    message.channel.bulkDelete(args[0])
    message.channel.send({embeds : [new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Successfully purged ${args[0]} messages.`)
        .setTitle('success')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
}

module.exports.help = {
	name: "purge",
	usage: "purges specified amount of messages.",
};