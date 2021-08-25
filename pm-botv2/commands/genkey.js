const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');
const axios = require('axios');
const encrypt = require('../encrypt.js');

module.exports.run = async (client, message, args) => {
	if(!message.member.roles.cache.some(a => a.name == "bot-adminperm") && !config.allowed.includes(message.author.id))
    {
        message.channel.send('not allowed!')
        return;
    }

    if(!args[0])
    {
        message.channel.send('please mention a timeframe: \n1 = 3 months\n2 = 6 months\n3 = 1 year\n4 = lifetime')
        return;
    }
    const options = {
        method: 'POST',
        headers: { 'duration': encrypt.encrypt(args[0]),
        'action' : encrypt.encrypt('genkey') },
        data: "plusminus-bot-api",
        url: 'https://api.plusminus.vip/',
    };
    axios(options).then(plusminus => {
        if(plusminus.data == "invalid duration")
        {
            message.channel.send('incorrect timeframe')
        }else if(plusminus.data != "invalid request")
        {
            message.channel.send({embeds : [new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Success!')
                .setDescription(`Successfully generated key. Check your dms!`)
                .setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})

            message.author.send({embeds : [new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Success!')
                .setDescription(`Successfully generated key.\n`
                + `KEY: ||${plusminus.data}||`)
                .setTimestamp(new Date)
                .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')]})
        }
        else
        {
            message.channel.send('error.')
        }
    });
};

module.exports.help = {
	name: "genkey",
	usage: "genkey <1/2/3/4>",
};