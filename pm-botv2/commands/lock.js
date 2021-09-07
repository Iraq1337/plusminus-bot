const Discord = require('discord.js');
const client = new Discord.Client({ intents: new Discord.Intents(32767)});
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
    if(args.length <= 0)
    {
        message.channel.send({embeds : [new MessageEmbed()
            .setColor('RED')
            .setDescription(`not allowed`)
            .setTitle('Error')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        return;
    }
    var role = message.guild.roles.cache.find(nigger => nigger.name === "users");
    if(args[0] == "server")
    {
        let channels = client.guilds.cache.find(nigger => nigger.name === "plusminus private").channels.cache;
        for (const channel of channels.values()) 
        {
            if(channel.type == "GUILD_CATEGORY")
            {
                if(channel.name.toLowerCase() != "important" && channel.name.toLowerCase() != "staff")
                {
                    channel.permissionOverwrites.edit(role.id, { SEND_MESSAGES: false });
                }
            }
        }

        message.channel.send(
        {
            embeds: 
            [
                new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`Successfully locked the discord!`)
                    .setTitle('lock')
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
            ]
        });
    }else if(args[0] == "channel")
    {
        message.channel.permissionOverwrites.edit(role.id, { SEND_MESSAGES: false });
        message.channel.send(
        {
            embeds: 
            [
                new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`Successfully locked the channel!`)
                    .setTitle('lock')
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
            ]
        });
    }
};
module.exports.help = {
	name: "lock",
	usage: "lock <channel/server>",
};