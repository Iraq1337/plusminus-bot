const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');
const axios = require('axios');
const { encrypt } = require('../encrypt.js');

module.exports.run = async (client, message, args) => {
    message.channel.send('This feature has been temporarly removed')
    return;
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
    
    if(!message.mentions.members.first()) return;
    const reqid = encrypt(message.mentions.members.first().id)
    try
    {
        const options = {
            method: 'POST',
            headers: { 'discordid' : reqid,
            'action' : encrypt('resetpw') },
            data: "plusminus-bot-api",
            url: 'https://api.plusminus.vip/',
        };
        axios(options).then(plusminus => {
            console.log(plusminus.data);
            if(plusminus.data == "account not found")
            {
                message.channel.send({embeds : [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Failure!')
                    .setDescription(`Cannot find ${message.mentions.members.first()}'s account!`)
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
            }
            else if(plusminus.data == "an error occurred")
            {
                message.channel.send({embeds : [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Failure!')
                    .setDescription(`An Unknown error occured while requesting a hwid reset.`)
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
            }
            else if(plusminus.data == "invalid request")
            {
                message.channel.send({embeds : [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Failure!')
                    .setDescription(`An Unknown error occured while requesting a hwid reset.`)
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
            }
            else if(plusminus.data == "not allowed")
            {
                message.channel.send({embeds : [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Failure!')
                    .setDescription(`Error: not allowed`)
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
            }else
            {
                message.channel.send({embeds : [new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('Success!')
                    .setDescription(`${plusminus.data}`)
                    .setTimestamp(new Date)
                    .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
            }
        })
    }
    catch(error)
    {
        console.log(error)
        message.channel.send({content: `error: ${error}`})
    }
};

module.exports.help = {
	name: "resethwid",
	usage: "resethwid @User",
};