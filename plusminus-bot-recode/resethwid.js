const Discord = require('discord.js');
const randomcolor = require('randomcolor');
const axios = require('axios');
function resethwid(msg)
{
    if(msg.mentions.members.first())
    {
        const options = {
            method: 'POST',
            headers: { 'discordid' : msg.mentions.members.first().id },
            data: "plusminus-bot-api",
            url: 'https://auth.plusminus.vip/reset',
        };
        axios(options).then(plusminus =>{
            if(plusminus.data == "successfully reset")
            {
                msg.channel.send(new Discord.MessageEmbed().setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                .setColor(randomcolor())
                .setDescription(`Successfully reset ${msg.mentions.members.first()}'s hwid!`)
                .setTitle('Success'))
            }
            else if(plusminus.data == "account not found")
            {
                msg.channel.send(new Discord.MessageEmbed().setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
                .setColor(randomcolor())
                .setDescription(`**ERROR: UNKNOWN USER!**`)
                .setTitle('Failure'))
            }
            else{
                msg.reply('unknown error')
            }
        })
    }
    else{
        msg.reply('Must mention user!')
    }
}
module.exports.resethwid = resethwid;