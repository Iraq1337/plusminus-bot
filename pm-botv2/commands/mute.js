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
    
    var user = message.mentions.members.first();
    if(user)
    {
        var role = message.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.add(role).then( () => {
            message.channel.send({embeds : [new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`Successfully muted ${user}!`)
            .setTitle('Mute')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        })
    }
    else 
        message.channel.send('Must specify user!')
};
module.exports.help = {
	name: "mute",
	usage: "mute @User <time>",
};