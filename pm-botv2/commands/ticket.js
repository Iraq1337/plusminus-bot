const { Client, Intents, MessageEmbed } = require('discord.js');
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

    if(!message.channel.name.startsWith('ticket'))
    {
        message.channel.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`Command can only be used in tickets!`)
            .setTitle('Error')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        return;
    }


    if(args.length <= 0 || args[0] != "delete")
    {
        message.channel.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`Usage: ticket delete`)
            .setTitle('Error')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        return;
    }
    
    message.channel.send(
    {
        embeds: 
        [
            new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Deleting ticket in 5 seconds!`)
            .setTitle('Unmute')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
        ]
    }).then(function(){
        setTimeout(() => {
            message.channel.delete();
        }, 5050);
    })
};

module.exports.help = {
	name: "unmute",
	usage: "unmute @User",
};