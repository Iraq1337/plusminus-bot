const randomcolor = require('randomcolor');
const Discord = require('discord.js')
function gay(msg)
{
    msg.channel.send(new Discord.MessageEmbed()
    .setTitle('Gaymeter')
    .setDescription(`${msg.mentions.members.first()||msg.author} is ${msg.mentions.members.first()||msg.author.id == '509073024503250944' ? Math.floor(Math.random()* 10) : Math.floor(Math.random() * 100)}% gay.`)
    .setTimestamp(new Date)
    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
    .setColor(randomcolor()))
}
module.exports.gay = gay;