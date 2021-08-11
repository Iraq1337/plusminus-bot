const Discord = require('discord.js');
const randomcolor = require('randomcolor');
function lock(msg)
{
    var channel = msg.mentions.channels.first()
    var user = msg.guild.roles.cache.find(nigger => nigger.name === "users")
     msg.channel.updateOverwrite(user,{ 'SEND_MESSAGES': false})
    msg.channel.send(new Discord.MessageEmbed()
        .setColor(randomcolor())
        .setDescription(`Successfully locked ${msg.channel}!`)
        .setTitle('lock')
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png'))
}
module.exports.lock = lock;