const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json')

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
    
    var list = message.guild.roles.cache.find(role => role.name == "muted").members.map(member => member.user.id).toString()
    var list_with_mention = '<@!' + list.split(',').join('>\n<@!') + '>';
    message.channel.send({ embeds: [new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('List of muted People')
        .setDescription(list_with_mention)
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
};

module.exports.help = {
	name: "mutes",
	usage: "mutes",
};