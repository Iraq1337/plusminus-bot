const { Client, Intents, MessageEmbed, Permissions  } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const config = require('./config.json');

module.exports.run = async (client, message, args) => {
    //command code
}

module.exports.help = {
	name: "command name",
	usage: "command usage",
};