//#region includes
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const config = require('./config.json');
const randomcolor = require('randomcolor')
//#endregion

//#region main
client.on('ready', () => {
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {
        type: "WATCHING"
    });
})
client.on('message', msg =>{
    client.user.setActivity(client.guilds.cache.find(nigger => nigger.name === "plusminus private").roles.cache.find(nigger => nigger.name ==="users").members.size + ' users', {
        type: "WATCHING"
    });
    if(!msg.author.id == '509073024503250944'||!msg.author.id == '867824566155870289') return; 
    if(!msg.member.hasPermission('ADMINISTRATOR')) return;
    if(msg.content == '!nuke')
    {
        msg.channel.clone().then(new_channel =>{
            new_channel.setPosition(msg.channel.position)
            new_channel.send('https://tenor.com/view/nuke-automic-boom-boom-nuked-gif-19961792')
            msg.channel.delete();
        })
    }  
    else if(msg.content == '!mutes')
    {
        var yes = msg.guild.roles.cache.find(nig => nig.name == "muted").members.map(lmao => lmao.user.id).toString().replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!').replace(',','>\n<@!')//OOM Please make this better I just didn't find a better fix.
        var result = '<@!' + yes + '>';
        result.replace(',','>\n<@!');
        result.replace(',','sas')
        msg.channel.send(new Discord.MessageEmbed()
            .setColor(randomcolor())
            .setTitle('List of muted People')
            .setDescription(result)
            .setTimestamp(new Date))
        
    }
    else if(msg.content.startsWith('!mute'))
    {
        var user = msg.mentions.members.first();
        var role = msg.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.add(role).then( () => {
        msg.channel.send(new Discord.MessageEmbed().setColor(randomcolor()).setDescription(`Successfully muted ${user}!`).setTitle('Mute').setTimestamp(new Date))
        })
    }
    else if(msg.content.startsWith('!unmute'))
    {
        var user = msg.mentions.members.first();
        var role = msg.guild.roles.cache.find(nigger => nigger.name === "muted")
        user.roles.remove(role).then( () => {
            msg.channel.send(new Discord.MessageEmbed().setColor(randomcolor()).setDescription(`Successfully unmuted ${user}!`).setTitle('Unmute').setTimestamp(new Date))
        })
    }
    else if(msg.content == '!gay')
    {
        msg.channel.send(`${msg.author} is ${Math.floor(Math.random() * 100)}% gay!`)
    }
})

client.login(config.token)
//#endregion

