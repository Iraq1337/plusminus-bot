const Discord = require('discord.js');
const randomcolor = require('randomcolor');
function unmute(msg)
{
    var user = msg.mentions.members.first();
    if(user)
    {
        var role = msg.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.remove(role).then( () => {
            msg.channel.send(new Discord.MessageEmbed()
            .setColor(randomcolor())
            .setDescription(`Successfully unmuted ${user}!`)
            .setTitle('Unmute')
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png'))
        })
    }
    else msg.channel.send('Must specify user!')
}
module.exports.unmute = unmute;