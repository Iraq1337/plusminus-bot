const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: new Intents(32767)});
const { encrypt } = require('../encrypt.js');
const axios = require('axios');

module.exports.run = async (client, member) => {
    const options = {
        method: 'POST',
        headers: { 'discordid': encrypt(member.id),
        'action' : encrypt('check') },
        data: "plusminus-bot-api",
        url: 'https://api.plusminus.vip/',
    };
    axios(options).then(response =>{
        let server = client.guilds.cache.find(guild => guild.name == "plusminus private");
        if(response.data == "iLKhAbGG6581Ib1DS89S")
        {
            member.roles.add(server.cache.find(role => role.name == "users")).catch(error => console.log(error))
            //server.channels.cache.find(channel => channel.name == "fuck").send(`Authed ${member.username}`);
        }
        else
        {
            member.kick();
            member.send('Your account isnt whitelisted!').catch(error => console.log(error))
            //server.channels.cache.find(channel => channel.name == "fuck").send(`Kicked ${member.username}`);
        }
    });
};
module.exports.help = {
	name: "autorole",
	usage: "none",
};