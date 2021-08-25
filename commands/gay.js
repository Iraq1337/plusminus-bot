const { Client, Intents, MessageEmbed, Permissions  } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let person = message.mentions.members.first() || message.author;
    let percent = (message.mentions.members.first() ? message.mentions.members.first().permissions.has(Permissions.FLAGS.ADMINISTRATOR) : message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) ? Math.floor(Math.random()* 10) : Math.floor(Math.random() * 101);
    let gaymessages = [
        `${person} is ${percent}% gay.`,
        "message2",
        "message3"
    ];
    message.channel.send({ 
        embeds: 
        [
            new MessageEmbed()
            .setTitle('Gaymeter')
            .setDescription(gaymessages[Math.floor(Math.random() * gaymessages.length)])
            .setTimestamp(new Date)
            .setFooter('plusminus','https://cdn.discordapp.com/attachments/874787200099831818/874790186821746728/plusminus.png')
            .setColor('RANDOM')
        ]
        });
};
module.exports.help = {
	name: "gay",
	usage: "gay",
};