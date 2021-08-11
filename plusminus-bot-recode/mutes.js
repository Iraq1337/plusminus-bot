const Discord = require('discord.js');
const randomcolor = require('randomcolor');
function mutes(msg)
{
    var list = msg.guild.roles.cache.find(nig => nig.name == "muted").members.map(lmao => lmao.user.id).toString()
    var list_with_mention = '<@!' + list.split(',').join('>\n<@!') + '>';
    msg.channel.send(new Discord.MessageEmbed()
        .setColor(randomcolor())
        .setTitle('List of muted People')
        .setDescription(list_with_mention)
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png'))
        
}
module.exports.mutes = mutes;