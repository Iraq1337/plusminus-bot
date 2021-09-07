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
        args[0] = '';
        var reason = args.join(' ');
        user.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`You were banned for ${reason}`)
            .setTitle('Banned')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]}).then(function() {
            user.ban({reason : reason});
        })
        
        message.channel.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`Banned ${user} for ${reason}`)
            .setTitle('Banned')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
    }
    else{
        message.reply('please mention a user!')
    }
};
module.exports.help = {
	name: "ban",
	usage: "ban @User",
};