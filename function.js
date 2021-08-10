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
function mutes(msg)
{
    var list = msg.guild.roles.cache.find(nig => nig.name == "muted").members.map(lmao => lmao.user.id).toString()
    var list_with_mention = '<@!' + list.split(',').join('>\n<@!') + '>';
    msg.channel.send(new Discord.MessageEmbed()
        .setColor(randomcolor())
        .setTitle('List of muted People')
        .setDescription(list_with_mention)
        .setTimestamp(new Date))
        .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
        
}
function nuke(msg)
{
    msg.channel.clone().then(new_channel =>{
        new_channel.setPosition(msg.channel.position)
        new_channel.send('https://tenor.com/view/nuke-automic-boom-boom-nuked-gif-19961792')
        msg.channel.delete();
    })
}
module.exports.mute = mute;
module.exports.nuke = nuke;
module.exports.mutes = mutes;
module.exports.unmute = unmute;