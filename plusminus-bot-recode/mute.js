const Discord = require('discord.js');
const randomcolor = require('randomcolor');
function mute(msg)
{
    var args = msg.content.slice('!mute '.length).split(' ');
    var user = msg.mentions.members.first();
    if(user)
    {
        var role = msg.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.add(role).then( () => {
            msg.channel.send(new Discord.MessageEmbed()
            .setColor(randomcolor())
            .setDescription(`Successfully muted ${user}!`)
            .setTitle('Mute').setTimestamp(new Date).setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png'))
        })
        if(args[1])
        {
            setTimeout(() => {
                user.roles.remove(role)
                msg.channel.send(`Unmuted: <@!${user}>, mute: expired.`)
            }, args[1]*60*60*1000);
        }
    }
    else
    {
        msg.channel.send(new Discord.MessageEmbed()
        .setColor(randomcolor())
        .setTimestamp(new Date)
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
        .setTitle('Usage')
        .setDescription('Usage: !mute @users duration in hours'))
    }
}
module.exports.mute = mute;