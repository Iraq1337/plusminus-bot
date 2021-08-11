const randomcolor = require('randomcolor');
const Discord = require('discord.js')
function commands(msg)
{
    msg.channel.send(new Discord.MessageEmbed()
    .setColor(randomcolor())
    .addFields({name: "Admin only commands", value: "```ini\n"         + "[!mute] mutes mentioned person.\n"
    + "[!unmute] unmutes mentioned person.\n"
    + "[!lock] locks current channel.\n"
    + "[!unlock] unlocks current channel.\n"
    + "[!nuke] nukes current channel."
    + "```", inline: true},
    {name: "public commands", value: "```ini\n"
    + "[!gay] returns how gay you are.\n"
    + "[!mutes] shows all people that are muted.\n"
    + "[!commands] returns this embed.\n"
    + "```", inline: true})
    .setTitle('Commands')
    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
    .setTimestamp(new Date))
}
module.exports.commands = commands;