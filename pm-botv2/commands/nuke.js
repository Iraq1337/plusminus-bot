const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
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
	
	message.channel.clone().then(newchannel => {
		newchannel.setPosition(message.channel.position)
		message.channel.delete()
		newchannel.send('https://tenor.com/view/destory-eexplode-nuke-gif-6073338')
	});
};

module.exports.help = {
	name: "nuke",
	usage: "nuke",
};